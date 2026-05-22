import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
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
          PRIVACY POLICY
        </h1>
        <p className="text-xs tracking-[0.3em] text-glass-muted uppercase mb-16">
          Effective Date: May 20, 2026
        </p>

        <div className="space-y-12 text-sm text-glass-muted leading-relaxed">
          <section>
            <p>
              AXS AI Creative Studio respects your privacy. This Privacy Policy explains how we collect, use, store, and protect information when you use our website, platform, tools, services, and related features.
            </p>
            <p className="mt-4">
              By using AXS AI Creative Studio, you agree to the practices described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">1. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <div className="space-y-4 ml-4">
              <div>
                <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-1">Account Information</h3>
                <p>When you create an account, join early access, or contact us, we may collect your name, email address, username, company name, and account preferences.</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-1">Usage Information</h3>
                <p>We may collect information about how you use the platform, including pages visited, features used, projects created, session activity, device information, browser type, IP address, and general location data.</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-1">Creative Content and Project Data</h3>
                <p>AXS AI Creative Studio allows users to create, upload, generate, organize, and manage creative assets. This may include prompts, scripts, images, videos, brand materials, campaign content, characters, worlds, voice direction, and other production-related data.</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-1">Payment Information</h3>
                <p>If paid plans are offered, payments may be processed through third-party payment providers. We do not store full credit card numbers on our servers.</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-1">Communication Data</h3>
                <p>If you contact us, submit feedback, request support, or join early access, we may store the content of your communication.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">2. How We Use Information</h2>
            <p className="mb-4">We use information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Provide and improve AXS AI Creative Studio</li>
              <li>Create and manage user accounts</li>
              <li>Deliver platform features and creative tools</li>
              <li>Save user projects, assets, settings, and preferences</li>
              <li>Improve performance, security, and user experience</li>
              <li>Respond to support requests and inquiries</li>
              <li>Send product updates, early access notices, and important account communications</li>
              <li>Analyze platform usage and feature performance</li>
              <li>Prevent fraud, abuse, unauthorized access, or misuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">3. AI-Generated Content</h2>
            <p>
              AXS AI Creative Studio may use artificial intelligence tools, APIs, and third-party model providers to help generate creative content. Depending on the feature, user inputs may be processed by external AI services.
            </p>
            <p className="mt-4">
              We make reasonable efforts to protect your data, but users should avoid uploading highly sensitive, confidential, or legally restricted information unless they understand the risks.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">4. Sharing of Information</h2>
            <p className="mb-4">We do not sell your personal information.</p>
            <p className="mb-4">
              We may share information with trusted service providers who help operate the platform, including hosting providers, analytics tools, payment processors, authentication providers, AI infrastructure providers, and email communication services.
            </p>
            <p>
              We may also disclose information if required by law, regulation, legal process, security investigation, or to protect the rights, safety, and integrity of AXS AI Creative Studio, our users, or the public.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">5. Data Storage and Security</h2>
            <p>
              We use reasonable technical, administrative, and organizational safeguards to protect user information. However, no online service is completely secure. You are responsible for protecting your account credentials and using strong passwords.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">6. Cookies and Tracking</h2>
            <p>
              We may use cookies, local storage, analytics tools, and similar technologies to improve the website, remember preferences, analyze traffic, and support platform functionality.
            </p>
            <p className="mt-4">
              You can adjust cookie settings in your browser, but some features may not work correctly if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">7. Data Retention</h2>
            <p>
              We retain information for as long as necessary to provide the service, comply with legal obligations, resolve disputes, enforce agreements, improve the platform, and maintain security.
            </p>
            <p className="mt-4">
              Users may request deletion of account information, subject to legal, technical, or operational limitations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">8. User Rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, export, or restrict certain personal information.
            </p>
            <p className="mt-4">
              To make a privacy request, contact us at: <a href="mailto:daflerjeremy35@hotmail.com" className="text-champagne hover:underline">daflerjeremy35@hotmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">9. Children’s Privacy</h2>
            <p>
              AXS AI Creative Studio is not intended for children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we may revise the effective date above. Continued use of the platform after updates means you accept the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">11. Contact</h2>
            <p>
              For questions about this Privacy Policy, contact:
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
