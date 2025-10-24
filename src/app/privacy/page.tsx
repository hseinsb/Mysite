import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Hussein Sbeiti - Systems Architect",
  description: "Privacy Policy for HussBuilds - Learn how we collect, use, and protect your personal information.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last Updated: October 24, 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-invert prose-lg max-w-none">
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                  Hussein Sbeiti ("we," "our," or "us") operates hussbuilds.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Personal Information</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When you contact us or request our services, we may collect:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Name and email address</li>
                  <li>Business information and project requirements</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Automatically Collected Information</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We automatically collect certain information when you visit our website:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring website addresses</li>
                  <li>Device and operating system information</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Respond to your inquiries and provide requested services</li>
                  <li>Send you project updates and service-related communications</li>
                  <li>Improve our website and services</li>
                  <li>Analyze website usage and optimize user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may use third-party services to help us operate our website and provide services:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                  <li><strong>Resend:</strong> For email communications</li>
                  <li><strong>Vercel:</strong> For website hosting</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  These third parties have their own privacy policies and we encourage you to review them.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
                <p className="text-gray-300 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <p className="text-gray-300">
                    <strong className="text-white">Email:</strong> hussein.sbeiti.wb@gmail.com
                  </p>
                  <p className="text-gray-300 mt-2">
                    <strong className="text-white">Website:</strong> <a href="https://hussbuilds.com" className="text-accent hover:text-accent-2">hussbuilds.com</a>
                  </p>
                  <p className="text-gray-300 mt-2">
                    <strong className="text-white">Location:</strong> Michigan, USA
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

