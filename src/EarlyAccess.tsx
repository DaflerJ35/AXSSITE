import { ArrowLeft, Sparkles, ChevronRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, FormEvent } from "react";

export default function EarlyAccess() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    creatorType: "",
    project: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Early Access Request - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCreator Type: ${formData.creatorType}\nWhat I want to build: ${formData.project}`
    );
    window.location.href = `mailto:daflerjeremy35@hotmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };
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

        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-champagne/40" />
          <span className="text-[10px] font-bold tracking-[0.4em] text-champagne uppercase">Limited Access</span>
          <div className="h-[1px] w-12 bg-champagne/40" />
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
          AXS AI Creative Studio<br />
          <span className="text-gradient-champagne">Early Access Program</span>
        </h1>

        <p className="text-xl text-glass-muted max-w-3xl leading-relaxed mb-16 font-light">
          AXS AI Creative Studio is building a next-generation AI creative operating system for creators, brands, filmmakers, agencies, and entrepreneurs who want to turn ideas into full cinematic content systems.
        </p>

        <div className="space-y-16">
          <section>
            <h2 className="font-display text-2xl font-bold tracking-tight mb-4 text-white">What Early Access Includes</h2>
            <p className="text-sm text-glass-muted leading-relaxed mb-6">
              Early Access may include access to selected AXS AI Creative Studio features such as:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Command Deck",
                "Universe Engine",
                "Character and identity consistency tools",
                "Script and campaign generation",
                "Image and video creative workflows",
                "Brand voice and strategy tools",
                "Asset organization",
                "Campaign planning",
                "Distribution preparation",
                "Analytics previews",
                "Experimental AI production features"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-3 glass-card rounded-lg">
                  <Sparkles className="w-4 h-4 text-champagne shrink-0" />
                  <span className="text-sm text-glass-muted">{feature}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-glass-muted mt-4 italic">
              Feature availability may vary during Early Access.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold tracking-tight mb-4 text-white">Why Join Early Access</h2>
            <p className="text-sm text-glass-muted leading-relaxed">
              Early Access users can help shape the future of the platform by testing workflows, giving feedback, identifying bugs, and helping us understand what serious creators actually need.
            </p>
            <p className="text-sm text-glass-muted leading-relaxed mt-4">
              This is for builders, creators, and teams who want more than random AI outputs. AXS AI Creative Studio is designed to connect the entire creative pipeline from idea to execution.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold tracking-tight mb-4 text-white">Early Access Is Limited</h2>
            <p className="text-sm text-glass-muted leading-relaxed">
              Access may be limited, invite-only, waitlisted, or released in phases.
            </p>
            <p className="text-sm text-glass-muted leading-relaxed mt-4">
              Submitting a request does not guarantee approval. We may prioritize users based on fit, use case, testing needs, platform readiness, or available capacity.
            </p>
          </section>

          <section className="glass-premium p-8 rounded-2xl border border-champagne/20">
            <h2 className="font-display text-2xl font-bold tracking-tight mb-4 text-white">Beta Disclaimer</h2>
            <p className="text-sm text-glass-muted leading-relaxed">
              Early Access features may be incomplete, experimental, unstable, or subject to change. Some tools may be modified, limited, paused, or removed as the platform evolves.
            </p>
            <p className="text-sm text-glass-muted leading-relaxed mt-4">
              By joining Early Access, you understand that the product is still in development.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold tracking-tight mb-4 text-white">User Responsibilities</h2>
            <p className="text-sm text-glass-muted leading-relaxed mb-4">
              Early Access users agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-sm text-glass-muted">
              <li>Use the platform responsibly</li>
              <li>Provide accurate signup information</li>
              <li>Avoid uploading illegal or harmful content</li>
              <li>Respect platform limits and testing rules</li>
              <li>Report serious bugs or issues when possible</li>
              <li>Understand that features may change before public launch</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold tracking-tight mb-4 text-white">Feedback</h2>
            <p className="text-sm text-glass-muted leading-relaxed">
              By submitting feedback, ideas, suggestions, bug reports, or feature requests, you allow AXS AI Creative Studio to use that feedback to improve the platform without obligation or compensation.
            </p>
          </section>

          <section className="glass-premium p-10 rounded-2xl border border-champagne/30">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-6 text-white text-center">Join Early Access</h2>
            <p className="text-sm text-glass-muted leading-relaxed mb-8 max-w-xl mx-auto text-center">
              Submit your information through our Early Access form. We review every request and prioritize based on use case and testing needs.
            </p>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-champagne mx-auto mb-6" />
                <h3 className="font-display text-2xl font-bold text-white mb-4">Request Submitted</h3>
                <p className="text-glass-muted max-w-md mx-auto">
                  Your email client should have opened. Send the message and we'll review your request. If it didn't open, email <a href="mailto:daflerjeremy35@hotmail.com" className="text-champagne hover:underline">daflerjeremy35@hotmail.com</a> directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left mb-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-champagne font-bold block">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-glass-muted/50 focus:outline-none focus:border-champagne/50 focus:bg-white/[0.07] transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-champagne font-bold block">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-glass-muted/50 focus:outline-none focus:border-champagne/50 focus:bg-white/[0.07] transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-champagne font-bold block">Creator Type / Business Type *</label>
                  <input
                    type="text"
                    required
                    value={formData.creatorType}
                    onChange={(e) => setFormData({ ...formData, creatorType: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-glass-muted/50 focus:outline-none focus:border-champagne/50 focus:bg-white/[0.07] transition-all"
                    placeholder="Filmmaker, Agency, Brand, etc."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-champagne font-bold block">What do you want to build? *</label>
                  <input
                    type="text"
                    required
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-glass-muted/50 focus:outline-none focus:border-champagne/50 focus:bg-white/[0.07] transition-all"
                    placeholder="Cinematic universe, brand campaign..."
                  />
                </div>
                <div className="md:col-span-2 mt-4">
                  <button
                    type="submit"
                    className="group px-14 py-6 bg-white text-black font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-champagne hover:scale-105 transition-all duration-500 flex items-center gap-4 mx-auto"
                  >
                    REQUEST EARLY ACCESS <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold tracking-tight mb-4 text-white">Early Access Contact</h2>
            <p className="text-sm text-glass-muted">
              For Early Access questions, contact: <a href="mailto:daflerjeremy35@hotmail.com" className="text-champagne hover:underline">daflerjeremy35@hotmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
