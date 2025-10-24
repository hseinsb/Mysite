import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Hussein Sbeiti - Systems Architect",
  description: "Terms of Service for HussBuilds - Understand the terms and conditions for using our services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Terms of Service
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
                <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing or using the services provided by Hussein Sbeiti ("HussBuilds," "we," "our," or "us"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Services Description</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We provide the following services:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Done-For-You Systems: Custom funnels, CRMs, and automations</li>
                  <li>Consulting: Digital infrastructure architecture and strategy</li>
                  <li>Education: Courses and templates for self-implementation</li>
                  <li>Website Development: Custom web solutions and maintenance</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Project Engagement</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Consultation Process</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Initial consultations are provided free of charge. Following the consultation, we will provide a detailed project proposal outlining scope, timeline, deliverables, and pricing.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Project Agreement</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All projects require a signed agreement before work begins. The agreement will include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Detailed scope of work and deliverables</li>
                  <li>Project timeline and milestones</li>
                  <li>Payment terms and schedule</li>
                  <li>Revision policy and additional work procedures</li>
                  <li>Intellectual property rights</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Payment Terms</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Unless otherwise specified in your project agreement:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Projects under $5,000: 50% deposit, 50% upon completion</li>
                  <li>Projects over $5,000: Split into milestone payments (typically 33% deposit, 33% midpoint, 34% completion)</li>
                  <li>Monthly maintenance packages: Billed monthly in advance</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Client Responsibilities</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To ensure successful project completion, clients are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Providing timely feedback and approvals</li>
                  <li>Supplying necessary content, assets, and access credentials</li>
                  <li>Reviewing and approving deliverables within agreed timeframes</li>
                  <li>Making payments according to the agreed schedule</li>
                  <li>Communicating clearly about project requirements and changes</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Revisions and Changes</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Each project includes a specified number of revision rounds as outlined in the project agreement. Additional revisions or scope changes may incur additional fees. We will provide a quote for any work outside the original scope before proceeding.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Project Timelines</h2>
                <p className="text-gray-300 leading-relaxed">
                  Project timelines are estimates based on timely client feedback and approval. Delays in client response or provision of necessary materials may extend the project timeline. We will communicate any timeline adjustments promptly.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Client Ownership</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Upon full payment, clients own the final deliverables created specifically for their project, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Custom designs and graphics</li>
                  <li>Website code and configurations</li>
                  <li>Custom automations and workflows</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Our Retention Rights</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We retain the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Display completed work in our portfolio</li>
                  <li>Use project as a case study (with client approval)</li>
                  <li>Reuse general methodologies, frameworks, and templates</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
                <p className="text-gray-300 leading-relaxed">
                  Projects may require third-party services (hosting, domains, software subscriptions, etc.). Clients are responsible for purchasing and maintaining these services directly. We can recommend and help set up these services but are not responsible for third-party service performance or costs.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Website Maintenance</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  For maintenance packages:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Services are billed monthly and can be cancelled with 30 days notice</li>
                  <li>Includes updates, backups, security monitoring, and technical support</li>
                  <li>Major redesigns or new features are outside maintenance scope</li>
                  <li>Response times vary by package level</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Warranties and Disclaimers</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We warrant that:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Services will be performed professionally and competently</li>
                  <li>Deliverables will function as described in the project agreement</li>
                  <li>Work will not infringe on third-party intellectual property rights</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-6">
                  However, we cannot guarantee specific business outcomes, search engine rankings, or sales results. Success depends on many factors outside our control.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  To the maximum extent permitted by law, our liability for any claims related to our services is limited to the amount paid by the client for the specific service in question. We are not liable for any indirect, incidental, special, or consequential damages.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Project Cancellation</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Client Cancellation</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Clients may cancel projects with written notice. Refunds are calculated based on work completed:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Deposits are non-refundable once work has begun</li>
                  <li>Partial refunds may be provided for work not yet completed</li>
                  <li>Clients receive all completed work upon final payment</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Our Cancellation Rights</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We reserve the right to cancel or refuse service if:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Payment terms are not met</li>
                  <li>Client behavior is abusive or unreasonable</li>
                  <li>Project requirements violate laws or our ethical standards</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Confidentiality</h2>
                <p className="text-gray-300 leading-relaxed">
                  We maintain confidentiality of all client information, business strategies, and proprietary data. We will not disclose client information without permission, except as required by law.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Dispute Resolution</h2>
                <p className="text-gray-300 leading-relaxed">
                  Any disputes arising from these terms or our services will first be attempted to be resolved through good-faith negotiation. If resolution cannot be reached, disputes will be resolved through binding arbitration in Michigan, USA.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have questions about these Terms of Service, please contact us:
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

