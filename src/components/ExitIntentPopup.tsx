"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("exitIntentShown");
    if (hasSeenPopup) {
      setHasShown(true);
      return;
    }

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Desktop: Mouse leave detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the page (navigation away)
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    // Mobile: Time-based + scroll-based triggers
    let scrollTimer: NodeJS.Timeout;
    let hasScrolled = false;
    
    const handleScroll = () => {
      hasScrolled = true;
      
      // Clear existing timer
      clearTimeout(scrollTimer);
      
      // Show popup after user has been scrolling and then stops for 5 seconds
      // This indicates they're reading/considering but might leave
      scrollTimer = setTimeout(() => {
        if (!hasShown && hasScrolled) {
          setShowPopup(true);
          setHasShown(true);
          sessionStorage.setItem("exitIntentShown", "true");
        }
      }, 5000);
    };

    // Mobile: Show after 30 seconds of engagement
    const engagementTimer = isMobile ? setTimeout(() => {
      if (!hasShown) {
        setShowPopup(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    }, 30000) : null; // 30 seconds

    // Add appropriate listeners based on device
    if (isMobile) {
      // Mobile: Use scroll-based detection
      window.addEventListener("scroll", handleScroll);
    } else {
      // Desktop: Use mouse leave detection after 3 second delay
      const timer = setTimeout(() => {
        document.addEventListener("mouseout", handleMouseLeave);
      }, 3000);
      
      return () => {
        clearTimeout(timer);
        document.removeEventListener("mouseout", handleMouseLeave);
      };
    }

    return () => {
      if (isMobile) {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimer);
        if (engagementTimer) clearTimeout(engagementTimer);
      }
    };
  }, [hasShown]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          />

          {/* Popup */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-2xl shadow-2xl shadow-blue-500/20 p-5 sm:p-8 relative overflow-hidden">
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors z-10"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-0" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -z-0" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="mb-4 sm:mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </motion.div>

                {/* Heading */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-3 sm:mb-4">
                  Wait! Before You Go...
                </h3>

                {/* Message */}
                <p className="text-sm sm:text-base text-gray-300 text-center mb-5 sm:mb-6 leading-relaxed">
                  Get a <span className="text-accent font-semibold">free strategy call</span> and discover how to automate your business and 3x your revenue with AI systems.
                </p>

                {/* Benefits */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {[
                    "Free 30-minute strategy session",
                    "Custom automation roadmap",
                    "No-obligation consultation",
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
                      </div>
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/25 h-10 sm:h-12 text-sm sm:text-base"
                  >
                    <Link 
                      href="/contact" 
                      className="flex items-center justify-center gap-2"
                      onClick={closePopup}
                    >
                      <span>Book Free Strategy Call</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </Link>
                  </Button>
                  
                  <button
                    onClick={closePopup}
                    className="flex-1 sm:flex-none px-6 h-10 sm:h-12 text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    No thanks
                  </button>
                </div>

                {/* Trust Badge */}
                <p className="text-[10px] sm:text-xs text-gray-500 text-center mt-3 sm:mt-4">
                  ⚡ 200k+ followers trust my systems • Based in Michigan, USA
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

