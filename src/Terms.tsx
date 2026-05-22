import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-glass-muted hover:text-champagne transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
          TERMS AND CONDITIONS
        </h1>
        <p className="text-xs tracking-[0.3em] text-glass-muted uppercase mb-16">
          Effective Date: May 20, 2026
        </p>

        <div className="space-y-12 text-sm text-glass-muted leading-relaxed">
          <section>
            <p>
              Welcome to AXS AI Creative Studio. These Terms and Conditions govern your access to and use of our website, platform, tools, services, and related features.
            </p>
            <p className="mt-4">
              By using AXS AI Creative Studio, you agree to these Terms. If you do not agree, do not use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">1. Overview</h2>
            <p>
              AXS AI Creative Studio is an AI-powered creative operating system designed to help users develop cinematic content systems, including brand assets, scripts, visual concepts, characters, worlds, campaigns, distribution content, and related creative materials.
            </p>
            <p className="mt-4">
              The platform may include tools for strategy, scripts, images, video, voice, campaigns, analytics, asset storage, and other creative production workflows.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">2. Account Registration</h2>
            <p>
              To access certain features, you may need to create an account. You agree to provide accurate information and keep your login credentials secure.
            </p>
            <p className="mt-4">
              You are responsible for all activity that occurs under your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">3. Acceptable Use</h2>
            <p className="mb-4">You agree not to use AXS AI Creative Studio to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Break laws or regulations</li>
              <li>Infringe intellectual property rights</li>
              <li>Upload malware, harmful code, or abusive content</li>
              <li>Attempt unauthorized access to systems or user accounts</li>
              <li>Generate or distribute unlawful, deceptive, exploitative, or harmful material</li>
              <li>Harass, threaten, impersonate, or defame others</li>
              <li>Interfere with platform security, performance, or availability</li>
              <li>Resell, scrape, reverse engineer, or abuse the service without permission</li>
            </ul>
            <p className="mt-4">
              We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">4. User Content</h2>
            <p>
              You retain ownership of the content you upload, create, or manage through the platform, subject to these Terms.
            </p>
            <p className="mt-4">
              By using the platform, you grant AXS AI Creative Studio a limited license to process, store, display, transmit, and modify your content only as necessary to operate, improve, secure, and provide the service.
            </p>
            <p className="mt-4">
              You are responsible for ensuring that you have the rights to any content you upload or use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">5. AI-Generated Output</h2>
            <p>
              AXS AI Creative Studio may generate creative outputs using AI models and third-party services. AI-generated content may not always be accurate, original, legally cleared, or suitable for commercial use without review.
            </p>
            <p className="mt-4">
              You are responsible for reviewing, editing, verifying, and legally clearing any content before publishing, selling, distributing, or using it commercially.
            </p>
            <p className="mt-4">
              AXS AI Creative Studio does not guarantee that generated content will be unique, copyright-free, trademark-safe, or free from third-party claims.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">6. Intellectual Property</h2>
            <p>
              The AXS AI Creative Studio platform, brand, interface, design, software, systems, workflows, trademarks, logos, and proprietary technology are owned by AXS AI Creative Studio or its licensors.
            </p>
            <p className="mt-4">
              You may not copy, reproduce, modify, distribute, or exploit any part of the platform without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">7. Payments and Subscriptions</h2>
            <p>
              If paid plans are offered, pricing, billing cycles, features, and limits will be shown at checkout or within the platform.
            </p>
            <p className="mt-4">
              You authorize applicable charges for selected plans. Subscription fees may renew automatically unless canceled before the renewal date.
            </p>
            <p className="mt-4">
              Refund policies, if any, will be provided at the time of purchase or in a separate billing policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">8. Early Access and Beta Features</h2>
            <p>
              Some features may be released as early access, beta, preview, experimental, or limited-availability tools.
            </p>
            <p className="mt-4">
              These features may be incomplete, unstable, changed, removed, limited, or discontinued at any time.
            </p>
            <p className="mt-4">
              We do not guarantee uninterrupted access to beta or early access features.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">9. Third-Party Services</h2>
            <p>
              AXS AI Creative Studio may connect with third-party tools, APIs, platforms, payment processors, AI providers, hosting services, or social media services.
            </p>
            <p className="mt-4">
              We are not responsible for third-party services, their availability, their policies, their outputs, or their actions.
            </p>
            <p className="mt-4">
              Your use of third-party services may be governed by their own terms and privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">10. Disclaimers</h2>
            <p>
              AXS AI Creative Studio is provided “as is” and “as available.”
            </p>
            <p className="mt-4">
              We do not guarantee that the platform will be error-free, uninterrupted, secure, or meet every user expectation.
            </p>
            <p className="mt-4">
              We do not guarantee business results, revenue, platform growth, content performance, campaign success, or creative outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">11. Limitation of Liability</h2>
            <p>
              To the maximum extent allowed by law, AXS AI Creative Studio will not be liable for indirect, incidental, special, consequential, punitive, or lost-profit damages arising from your use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">12. Termination</h2>
            <p>
              We may suspend or terminate access if you violate these Terms, misuse the platform, create legal risk, fail to pay required fees, or engage in harmful activity.
            </p>
            <p className="mt-4">
              You may stop using the platform at any time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">13. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the platform after changes means you accept the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">14. Contact</h2>
            <p>
              For questions about these Terms, contact:
            </p>
            <p className="mt-2">
              <strong className="text-white">AXS AI Creative Studio</strong><br />
              Email: <a href="mailto:daflerjeremy35@hotmail.com" className="text-champagne hover:underline">daflerjeremy35@hotmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
