import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Routes, Route, Link } from "react-router-dom";
import { 
  Dna, 
  Globe, 
  Lock, 
  Rocket, 
  ChevronRight, 
  Sparkles, 
  Video, 
  Type, 
  Layout, 
  Cpu,
  Brain,
  History,
  Workflow,
  BarChart3,
  Share2,
  Layers,
  MonitorPlay,
  Mic
} from "lucide-react";
import { useRef } from "react";
import logoPath from "./assets/images/axs_logo_main_1779216939111.png";
import studioLogoPath from "./assets/images/axs_creative_studio_logo.png";
import backdropPath from "./assets/images/legendary_cinematic_backdrop_1779217241755.png";
import upscaledLogoPath from "./assets/images/axs_upscaled_logo.jpg";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import Terms from "./Terms.tsx";
import EarlyAccess from "./EarlyAccess.tsx";

const BackgroundLayers = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const bgTranslateY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const starsTranslateY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const nebulaOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.6, 0.3]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base Cinematic Plate */}
      <motion.div 
        style={{ y: bgTranslateY, scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={backdropPath} 
          alt="" 
          className="w-full h-full object-cover opacity-60 brightness-[0.4] contrast-[1.2]" 
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Dynamic Nebula Glows */}
      <motion.div 
        style={{ opacity: nebulaOpacity }}
        className="absolute inset-0 z-10"
      >
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full bg-champagne/10 blur-[160px] animate-subtle-glow" />
        <div className="absolute bottom-[0%] right-[-10%] w-[70%] h-[70%] rounded-full bg-intel-cyan/10 blur-[160px] animate-pulse-slow" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px] animate-pulse-slow" />
      </motion.div>

      {/* Floating Star/Particle Layer (Parallax) */}
      <motion.div 
        style={{ y: starsTranslateY }}
        className="absolute inset-0 z-20"
      >
        {[...Array(40)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              animation: `pulse ${Math.random() * 4 + 2}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
              animationDelay: Math.random() * 5 + "s"
            }}
          />
        ))}
      </motion.div>

      {/* Technical Blueprint Overlay */}
      <div className="absolute inset-0 z-30 bg-blueprint opacity-[0.04]" />
      
      {/* Post-Processing Vignette */}
      <div className="absolute inset-0 z-40 vignette pointer-events-none" />
      
      {/* Noise Grain for Texture */}
      <div className="absolute inset-0 z-50 opacity-[0.015] pointer-events-none mix-blend-overlay">
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
    </div>
  );
};

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 glass-premium border-x-0 border-t-0 rounded-none bg-black/40 backdrop-blur-3xl">
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <img src={logoPath} alt="AXS Logo" className="w-full h-full object-contain relative z-10" referrerPolicy="no-referrer" />
      </div>
      <div className="flex flex-col">
        <span className="font-display font-bold tracking-[0.3em] text-[10px] sm:text-xs text-white group-hover:text-champagne transition-colors">AI INNOVATION STUDIO</span>
        <span className="text-[9px] tracking-[0.4em] text-glass-muted uppercase">SYSTEM_OS_v1.0</span>
      </div>
    </div>
    <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold tracking-[0.3em] text-glass-muted uppercase">
      <a href="#memory" className="hover:text-champagne transition-all hover:tracking-[0.4em]">Memory</a>
      <a href="#sub-studios" className="hover:text-champagne transition-all hover:tracking-[0.4em]">Sub-Studios</a>
      <a href="#ecosystem" className="hover:text-champagne transition-all hover:tracking-[0.4em]">Ecosystem</a>
      <a href="#governance" className="hover:text-champagne transition-all hover:tracking-[0.4em]">Governance</a>
    </div>
    <div className="flex items-center gap-4">
      <Link to="/early-access">
        <button className="hidden sm:block px-8 py-2.5 glass-premium border-champagne/20 text-champagne text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-champagne/10 transition-all rounded-full">
          ENTER_PORTAL
        </button>
      </Link>
    </div>
  </nav>
);

const SectionLabel = ({ children, color = "text-glass-muted" }: { children: React.ReactNode, color?: string }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className={`h-[1px] w-12 bg-current ${color} opacity-20`} />
    <span className={`text-[10px] font-bold tracking-[0.4em] uppercase ${color}`}>
      {children}
    </span>
    <div className={`h-[1px] w-12 bg-current ${color} opacity-20`} />
  </div>
);

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <motion.div 
    whileHover={{ scale: 1.01, translateY: -2 }}
    className={`glass-card p-8 rounded-2xl ${className}`}
  >
    {children}
  </motion.div>
);

const FinalBranding = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [studioImgError, setStudioImgError] = React.useState(false);

  React.useEffect(() => {
    const logo = logoRef.current;
    const footer = footerRef.current;

    if (!logo || !footer) return;

    const handleScroll = () => {
      const logoRect = logo.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.6;

      if (logoRect.top < triggerPoint) {
        logo.style.opacity = "1";
        logo.style.transform = "scale(1) translateY(0)";
        logo.style.filter = "blur(0)";
      } else {
        logo.style.opacity = "0";
        logo.style.transform = "scale(0.82) translateY(40px)";
        logo.style.filter = "blur(12px)";
      }

      // Footer appears after logo
      const footerTrigger = window.innerHeight * 0.3;
      if (logoRect.top < footerTrigger) {
        footer.style.opacity = "1";
        footer.style.transform = "translateY(0)";
        footer.style.filter = "blur(0)";
      } else {
        footer.style.opacity = "0";
        footer.style.transform = "translateY(40px)";
        footer.style.filter = "blur(8px)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="final-logo-sequence z-[110]">
      <div className="final-logo-backdrop" aria-hidden="true" />

      <div className="final-logo-inner">
         <div className="relative flex flex-col items-center logo-container">
           {/* Studio artwork — hidden on error, falls back to text mark */}
           <img
             ref={logoRef}
             id="scrollLogo"
             src={studioLogoPath}
             alt="AXS AI Creative Studio"
             className="final-studio-logo-img"
             style={{ display: studioImgError ? "none" : "block", opacity: 0, transition: "opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out" }}
             onError={() => setStudioImgError(true)}
             referrerPolicy="no-referrer"
           />

           {/* Fallback brand mark when studio image is not available */}
           {studioImgError && (
             <>
               <img src={logoPath} alt="AXS Logo" className="w-24 h-24 object-contain mb-8 opacity-80" referrerPolicy="no-referrer" />
               <div className="final-logo-mark">AXS</div>
             </>
           )}

           <p className="final-logo-tagline">
             Imagine. Build. Direct. Distribute. Remember.
           </p>
         </div>
      </div>

      <footer
        ref={footerRef}
        className="final-footer"
        style={{ opacity: 0, transition: "opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out" }}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <img src={logoPath} alt="" className="w-8 h-8 object-contain" />
            <strong className="text-white tracking-[0.2em] text-xs uppercase font-bold">AXS AI Innovation Studio</strong>
          </div>
          <p className="text-[10px] leading-relaxed max-w-xs font-medium tracking-wide">The cinematic AI creative operating system for connected content production.</p>
        </div>

        <nav>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms and Conditions</Link>
          <Link to="/early-access">Early Access</Link>
          <a href="mailto:daflerjeremy35@hotmail.com">Contact</a>
        </nav>

        <span className="text-[9px] font-bold tracking-widest uppercase opacity-40">© 2026 AXS AI Innovation Studio. All rights reserved.</span>
      </footer>
    </section>
  );
};

const ProductProofCard = ({ title, category, delay = 0, variant = "default" }: { title: string, category: string, delay?: number, variant?: "default" | "nodes" | "timeline" | "grid", key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className="group relative h-[500px] rounded-[2.5rem] overflow-hidden liquid-glass cursor-pointer bg-[#0a0b0e]"
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
    <div className="absolute inset-0 bg-blueprint opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700" />
    
    {/* High-Fidelity CSS Mock Visual */}
    <div className="absolute inset-0 flex items-center justify-center p-6 overflow-hidden">
      <div className="w-full h-full glass-premium rounded-[1.5rem] flex items-center transform translate-y-16 group-hover:translate-y-6 transition-all duration-1000 ease-[0.16, 1, 0.3, 1] border-white/[0.1] shadow-[0_40px_100px_rgba(0,0,0,1)] relative bg-[#0a0b0e]">
        
        {/* Mock Sidebar Strip - Detailed */}
        <div className="w-14 h-full border-r border-white/[0.05] flex flex-col items-center py-6 gap-5 bg-black/40">
           <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-4">
              <div className="w-4 h-4 rounded-sm border border-white/20" />
           </div>
           {[...Array(6)].map((_, i) => (
             <div key={i} className={`w-8 h-8 rounded-[10px] flex items-center justify-center transition-all ${i === 0 ? 'bg-champagne/20 border border-champagne/40 text-champagne' : 'bg-white/[0.03] border border-white/5 text-glass-muted hover:border-white/20'}`}>
                <div className="w-3 h-3 rounded-full border border-current opacity-40" />
             </div>
           ))}
        </div>

        <div className="flex-1 h-full flex flex-col">
          {/* Mock OS Header - Detailed */}
          <div className="flex items-center justify-between border-b border-white/[0.05] px-6 py-4 bg-black/20">
            <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/30 border border-green-500/20" />
            </div>
            <div className="flex gap-4 items-center">
              <div className="h-6 px-3 flex items-center rounded bg-white/[0.03] border border-white/10">
                 <div className="w-16 h-1 bg-white/10 rounded-full" />
              </div>
              <div className="flex gap-2">
                <div className="px-2.5 py-1 rounded-full bg-champagne/10 text-[7px] font-bold tracking-widest text-champagne uppercase border border-champagne/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  LIVE_SYNC
                </div>
                <div className="px-2.5 py-1 rounded-full bg-white/[0.05] text-[7px] font-bold tracking-widest text-glass-muted uppercase border border-white/5">
                  v1.2.0
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-8 flex flex-col gap-8 relative overflow-hidden">
            {/* Main Content Area Mockup */}
            <div className="w-full h-[60%] rounded-2xl bg-white/[0.02] border border-white/[0.08] overflow-hidden relative group/inner flex items-center justify-center shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-champagne/[0.08] via-transparent to-intel-cyan/[0.08] opacity-50" />
              
              {variant === "nodes" && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div animate={{ scale: [1, 1.1, 1], rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[200px] h-[200px] border border-dashed border-white/10 rounded-full opacity-20" />
                  <div className="relative z-10 grid grid-cols-3 gap-6">
                     {[...Array(6)].map((_, i) => (
                       <div key={i} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                          <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-champagne animate-pulse' : 'bg-intel-cyan opacity-50'}`} />
                       </div>
                     ))}
                  </div>
                </div>
              )}
              
              {variant === "timeline" && (
                <div className="w-full h-full p-8 flex flex-col justify-end gap-5">
                  <div className="flex justify-between items-center mb-4">
                     <div className="h-4 w-32 bg-white/5 rounded" />
                     <div className="h-4 w-12 bg-champagne/20 rounded" />
                  </div>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="space-y-2">
                       <div className="h-1.5 w-1/4 bg-white/10 rounded-full" />
                       <div className="h-3 w-full bg-white/[0.03] rounded-full overflow-hidden border border-white/5">
                          <motion.div 
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 4, repeat: Infinity, delay: i * 0.8, ease: "linear" }}
                            className="h-full w-1/3 bg-gradient-to-r from-transparent via-champagne/30 to-transparent"
                          />
                       </div>
                    </div>
                  ))}
                </div>
              )}

              {variant === "grid" && (
                <div className="grid grid-cols-4 gap-4 w-full h-full p-8">
                  {[...Array(8)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="rounded-xl bg-white/[0.04] border border-white/[0.1] relative overflow-hidden group/thumb"
                    >
                       <div className="absolute bottom-2 left-2 right-2 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full bg-champagne w-[${Math.floor(Math.random() * 60 + 30)}%]`} />
                       </div>
                    </motion.div>
                  ))}
                </div>
              )}
              
              <div className="absolute top-4 right-4 text-champagne opacity-40">
                 <Sparkles className="w-5 h-5" />
              </div>
            </div>

            {/* Bottom Status Blocks */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] space-y-3">
                <div className="flex justify-between items-center">
                   <div className="w-12 h-2 bg-white/10 rounded-full" />
                   <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full" />
                <div className="h-1.5 w-2/3 bg-white/5 rounded-full" />
              </div>
              <div className="p-4 rounded-xl bg-champagne/[0.03] border border-champagne/10 space-y-3">
                 <div className="flex justify-between items-center">
                    <div className="w-16 h-2 bg-champagne/20 rounded-full" />
                    <History className="w-3 h-3 text-champagne/40" />
                 </div>
                 <div className="flex gap-2">
                    <div className="w-4 h-4 rounded-sm bg-champagne/10" />
                    <div className="w-4 h-4 rounded-sm bg-white/5" />
                    <div className="w-4 h-4 rounded-sm bg-white/5" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-10 left-10 right-10 z-20">
      <div className="overflow-hidden mb-4">
        <motion.span 
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          className="text-[10px] font-bold tracking-[0.5em] text-champagne uppercase block"
        >
          {category}
        </motion.span>
      </div>
      <h4 className="font-display text-3xl font-bold tracking-tight text-white mb-4 leading-tight">{title}</h4>
      <div className="flex items-center gap-2 text-[9px] text-glass-muted font-bold tracking-[0.4em] uppercase group-hover:text-champagne transition-all duration-500">
        INSPECT_MODULE <ChevronRight className="w-4 h-4 translate-x-[-4px] group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  </motion.div>
);

function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const logoScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.3], [0.1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative overflow-hidden scrollbar-hide" style={{ backgroundColor: 'var(--color-obsidian)' }}>
      {/* Cinematic Legendary Background */}
      <BackgroundLayers scrollYProgress={scrollYProgress} />

      <Nav />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-48 pb-12 overflow-hidden">
        {/* Background Logo Pulse */}
        <motion.div 
           style={{ scale: logoScale, opacity: logoOpacity }}
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 0.1, scale: 1 }}
           transition={{ duration: 2.5, ease: "easeOut" }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl pointer-events-none select-none blur-[2px]"
        >
           <img src={logoPath} alt="" className="w-full h-full object-contain animate-logo-flare" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center max-w-6xl w-full"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-2 mb-16 glass-premium border-white/5 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-champagne animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-champagne uppercase">
              The AI Operating System for Cinema
            </span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-[8.5rem] font-bold tracking-tighter leading-[0.8] mb-12">
            <span className="text-gradient-champagne text-glow-champagne">ONE IDEA.</span><br />
            <span className="text-white">ONE MEMORY.</span><br />
            <span className="text-gradient-champagne text-glow-champagne">INFINITE CINEMA.</span>
          </h1>

          <p className="text-glass-text text-lg md:text-2xl font-light leading-relaxed max-w-4xl mx-auto mb-16 px-4">
            <span className="text-white font-bold tracking-widest text-[10px] block mb-4 uppercase opacity-60">Architectural Directive</span>
            <span className="text-white font-bold text-xl md:text-2xl tagline-underline mb-2 md:mb-0">AXS AI Innovation Studio</span> is a premium AI creative operating system that transforms a single spark into a complete content empire: <span className="text-white font-medium">strategy, scripts, images, video, voice, and distribution</span>—all bound by <span className="text-champagne font-medium">absolute cinematic memory.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
            <Link to="/early-access">
              <button className="group relative px-14 py-6 bg-white text-black font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-champagne hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(255,255,255,0.15)] flex items-center gap-4 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_infinite] transition-all" />
                BACK_THE_BUILD <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
            <Link to="/early-access">
              <button className="group px-14 py-6 glass-premium border-white/10 font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-white/5 hover:scale-105 transition-all duration-500 flex items-center gap-4">
                JOIN_ACCESS <Sparkles className="w-5 h-5 group-hover:rotate-12 group-hover:scale-125 transition-transform" />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Product Preview Section */}
      <section className="relative z-10 py-32 px-4 w-full bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <SectionLabel color="text-champagne">Product Interface</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
              See the AXS Studio in motion.
            </h2>
            <p className="text-xl text-glass-muted max-w-3xl mx-auto leading-relaxed font-light">
              A connected production system for strategy, scripts, visuals, video, voice, campaigns, distribution, analytics, and asset memory.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Command Deck", 
                variant: "nodes" as const,
                desc: "The nerve center of your creative universe. Manage lore, character DNA, and project hierarchy."
              },
              { 
                title: "Universe Engine", 
                variant: "grid" as const,
                desc: "Visual lore-mapping and spatial asset management. Keep every character, prop, and set in perfect sync."
              },
              { 
                title: "Campaign Builder", 
                variant: "timeline" as const,
                desc: "Automated distribution pipeline. Transform cinematic masters into multi-platform campaign assets instantly."
              }
            ].map((item, i) => (
              <ProductProofCard 
                key={i}
                category="STUDIO_INTERFACE_PREVIEW"
                title={item.title}
                variant={item.variant}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative z-10 py-40 px-4 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-32">
            <SectionLabel color="text-red-500">The Problem</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Creators lose context,<br /><span className="text-glass-muted">every time they switch apps.</span>
            </h2>
            <p className="text-xl text-glass-muted max-w-3xl mx-auto leading-relaxed font-light">
              Most AI tools lack persistent memory. You aren't building a creative universe—you're baby-sitting a chat box. AXS solves the fragmentation of the AI creative stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Brain, label: "Prompt drift", desc: "Your creative vision decays with every iteration as the AI forgets context." },
              { icon: History, label: "Identity Loss", desc: "Characters lose face, body, and voice consistency across shots and studios." },
              { icon: Lock, label: "Broken Lore", desc: "The AI hallucinates contradictions that break your world's established rules." },
              { icon: Sparkles, label: "Inconsistent Style", desc: "Visual DNA is impossible to maintain manually as tools evolve and change." },
              { icon: Layout, label: "Fragmented Files", desc: "Your creative assets are trapped in a dozen browser tabs and silos." },
              { icon: Workflow, label: "Zero Integration", desc: "Strategy, production, and distribution never speak a common language." },
            ].map((item, i) => (
              <GlassCard key={i} className="problem-card border-red-500/10">
                <item.icon className="w-10 h-10 text-red-500/60 mb-8 group-hover:text-red-500 group-hover:scale-110 transition-all duration-500" />
                <h3 className="text-[12px] font-bold tracking-[0.4em] uppercase text-white mb-4">
                  {item.label}
                </h3>
                <p className="text-sm text-glass-muted leading-relaxed font-medium">
                  {item.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section id="memory" className="relative z-10 py-64 px-4 w-full overflow-hidden bg-black/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-champagne/[0.03] blur-[220px]" />
        
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="flex flex-col items-center text-center mb-32">
            <SectionLabel color="text-champagne">The Solution</SectionLabel>
            <h2 className="font-display text-5xl md:text-[7.5rem] font-bold tracking-tight mb-8 leading-[0.85]">
              AXS is the memory layer.
            </h2>
            <p className="text-2xl text-glass-muted max-w-3xl mx-auto leading-relaxed font-light">
              We connect every creative step. From initial spark to global campaign, every asset knows its place in the story—and your next project starts where the last one left off.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Dna, title: "DNA", desc: "Character Identity Locked", label: "IDENTITY" },
              { icon: Globe, title: "WORLD", desc: "Universal Lore Continuity", label: "ENVIRONMENT" },
              { icon: Lock, title: "VAULT", desc: "Production-Grade Memory", label: "STORAGE" },
              { icon: Rocket, title: "LAUNCH", desc: "Automated Campaign Engine", label: "OUTPUT" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -12 }}
                className="glass-premium p-10 text-center flex flex-col items-center group relative h-[380px] justify-center hover:border-champagne/30 transition-all flex-shrink-0"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />
                <div className="w-20 h-20 rounded-full glass-premium border-white/5 flex items-center justify-center mb-10 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all">
                  <item.icon className="w-10 h-10 text-champagne transition-transform group-hover:scale-110 duration-700" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.45em] text-champagne/60 mb-3 uppercase">{item.label}</span>
                <h3 className="font-display font-bold text-3xl tracking-widest mb-6 uppercase">{item.title}</h3>
                <p className="text-[11px] text-glass-muted tracking-wide font-bold leading-loose max-w-[200px] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What AXS actually gives you */}
      <section className="relative z-10 py-40 px-4 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <SectionLabel color="text-champagne">The Value Prop</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
              What AXS actually gives you.
            </h2>
            <p className="text-xl text-glass-muted max-w-3xl mx-auto leading-relaxed font-light">
              Not just a tool, but a complete cinematic pipeline engineered for the next generation of creative studios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {[
              { icon: Brain, title: "Strategy Builder", desc: "AI-driven market analysis and creative strategy for your cinematic IP." },
              { icon: Type, title: "Script Forge", desc: "Lore-aware narrative engine with character voice and world-lore persistence." },
              { icon: Sparkles, title: "Image Studio", desc: "Aesthetic-locked visual generation across all modules and projects." },
              { icon: MonitorPlay, title: "Video Studio", subtitle: "Motion Direct", desc: "Cinematic trailers, reels, and sequence generation with camera logic." },
              { icon: Mic, title: "Voice Studio", desc: "Consistent character voice-overs and dialogue synthesis for world lore." },
              { icon: Workflow, title: "Campaign Builder", desc: "Platform-aware marketing rollouts and distribution scaling." },
              { icon: Rocket, title: "Distribution Prep", desc: "Automated localization, export formats, and metadata optimization." },
              { icon: History, title: "Memory Vault", desc: "Persistent analytics and asset evolution across your entire studio." },
            ].map((item, i) => (
              <GlassCard key={i} className="group hover:border-champagne/20 transition-all duration-500">
                <item.icon className="w-8 h-8 text-champagne/60 mb-6 group-hover:text-champagne transition-all" />
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-sm text-glass-muted leading-relaxed font-medium">
                  {item.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Rooms */}
      <section id="sub-studios" className="relative z-10 py-32 px-4 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 px-4">
             <div className="max-w-3xl">
                <SectionLabel color="text-intel-cyan">Production Suite</SectionLabel>
                <h2 className="font-display text-5xl md:text-[7.5rem] font-bold tracking-tight leading-[0.8] mb-6">
                  Six cinematic rooms.<br />
                  <span className="text-glass-muted">One connected brain.</span>
                </h2>
             </div>
             <p className="text-xl text-glass-muted max-w-sm font-light leading-relaxed mb-4">
                A modular operating system where every studio sub-room writes to the same core universe memory.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              { icon: Dna, title: "Character DNA", subtitle: "Identity stays locked", desc: "Build digital actors with immutable face, body, and voice traits. Export once, use consistently across every room." },
              { icon: Globe, title: "Universe Engine", subtitle: "Lore-aware worlds", desc: "Document factions, timelines, and geography that the AI understands as world-facts, not creative suggestions." },
              { icon: Sparkles, title: "Image Studio", subtitle: "Premium framing", desc: "Generate cinematic stills and posters that respect your project's visual style and lighting DNA in every frame." },
              { icon: Video, title: "Video Studio", subtitle: "Direct the motion", desc: "Advanced motion steering, trailers, and reels with cinematic shot language, pacing, and camera logic." },
              { icon: Type, title: "Script Forge", subtitle: "Story intelligence", desc: "Narrative architecture that speaks in your project's unique voice and maintains strict internal logic." },
              { icon: Rocket, title: "Launch System", subtitle: "Infinite distribution", desc: "Automate campaign rollouts. AI-driven localization and platform-specific variations for global release." },
            ].map((room, i) => (
              <GlassCard key={i} className="group border-white/[0.05] flex flex-col h-full p-10 liquid-glass cursor-pointer hover:border-intel-cyan/40">
                <div className="flex items-center gap-5 mb-10 pointer-events-none">
                  <div className="w-16 h-16 rounded-[1.25rem] glass-premium bg-white/[0.02] border-white/5 flex items-center justify-center text-intel-cyan group-hover:scale-110 group-hover:bg-intel-cyan/10 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.2)] transition-all duration-700">
                    <room.icon className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-intel-cyan/60 group-hover:text-intel-cyan transition-colors">PRD_ROOM_0{i+1}</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-glass-muted">{room.subtitle}</span>
                  </div>
                </div>
                <h4 className="font-display font-bold text-4xl mb-6 uppercase tracking-tight text-white group-hover:text-intel-cyan transition-colors duration-500 pointer-events-none">{room.title}</h4>
                <p className="text-base text-glass-muted leading-relaxed mb-12 flex-grow font-medium pointer-events-none">
                  {room.desc}
                </p>
                <Link to="/early-access">
                  <button className="group/btn w-full py-5 btn-premium rounded-xl text-[10px] font-bold tracking-[0.4em] uppercase text-white flex items-center justify-center gap-3 active:scale-95">
                    Open Sub-Studio <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Product Proof Gallery */}
      <section id="ecosystem" className="relative z-10 py-40 px-4 w-full bg-black/30 bg-blueprint">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-32">
            <div className="max-w-2xl">
              <SectionLabel color="text-champagne">Visual Proof</SectionLabel>
              <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
                Product proof, not<br /><span className="text-glass-muted">placeholder promise.</span>
              </h2>
            </div>
            <p className="text-glass-muted text-lg max-w-sm mb-2">
              Every card reflects an actual interface module currently in active development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
            <ProductProofCard category="MEMORY_ENGINE" title="Universal Node Map" delay={0.1} variant="nodes" />
            <ProductProofCard category="VIDEO_STUDIO" title="Temporal Sequencing" delay={0.2} variant="timeline" />
            <ProductProofCard category="DNA_VAULT" title="Character Identity Lock" delay={0.3} variant="grid" />
            <ProductProofCard category="SCRIPT_FORGE" title="Nexus Dialogue Flow" delay={0.4} variant="nodes" />
            <ProductProofCard category="IMAGE_STUDIO" title="Aesthetic Neural Renders" delay={0.5} variant="grid" />
            <ProductProofCard category="CAMPAIGN_HUB" title="Multimodal Distribution" delay={0.6} variant="timeline" />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative z-10 py-40 px-4 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl w-full glass-premium p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
          
          <Sparkles className="w-12 h-12 text-champagne/20 mx-auto mb-12 animate-pulse" />
          <h3 className="font-display text-4xl md:text-6xl font-bold italic tracking-tight leading-tight text-glow-champagne mb-12">
            “This is not another AI tool. This feels like the control room for an <span className="text-white">entire creative universe.</span>”
          </h3>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
               <div className="h-[1px] w-8 bg-champagne/40" />
               <span className="text-xs font-bold tracking-[0.4em] text-champagne uppercase">A-LIST STUDIO DIRECTOR</span>
               <div className="h-[1px] w-8 bg-champagne/40" />
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Sparkles key={i} className="w-3 h-3 text-champagne" />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Funding Clarity Section */}
      <section id="governance" className="relative z-10 py-40 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
             <SectionLabel color="text-champagne">Development Status</SectionLabel>
             <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-12">
               Why we’re raising.
             </h2>
             <div className="text-left space-y-8">
               <p className="text-xl text-glass-muted leading-relaxed font-light italic">
                 AXS is in active development. We aren't selling a finished product—we're inviting you to fund the completion of the production-grade pipeline.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                  <div className="space-y-4">
                     <h4 className="text-sm font-bold tracking-[0.2em] text-white uppercase border-b border-white/5 pb-2">Primary Goals</h4>
                     <ul className="text-sm text-glass-muted space-y-3">
                        <li className="flex gap-3"><ChevronRight className="w-4 h-4 text-champagne shrink-0" /> Polish the connected interface layer</li>
                        <li className="flex gap-3"><ChevronRight className="w-4 h-4 text-champagne shrink-0" /> Improve cross-module reliability</li>
                        <li className="flex gap-3"><ChevronRight className="w-4 h-4 text-champagne shrink-0" /> Onboard our first 50 creators</li>
                     </ul>
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-sm font-bold tracking-[0.2em] text-white uppercase border-b border-white/5 pb-2">Technical Focus</h4>
                     <ul className="text-sm text-glass-muted space-y-3">
                        <li className="flex gap-3"><ChevronRight className="w-4 h-4 text-champagne shrink-0" /> Finalize Character DNA persistence</li>
                        <li className="flex gap-3"><ChevronRight className="w-4 h-4 text-champagne shrink-0" /> Secure high-speed memory clusters</li>
                        <li className="flex gap-3"><ChevronRight className="w-4 h-4 text-champagne shrink-0" /> Optimize global distribution prep</li>
                     </ul>
                  </div>
               </div>
               <p className="text-xs text-glass-muted tracking-widest uppercase text-center pt-8 opacity-40">
                 No fake claims. No unlimited GPU promises. Just honest engineering.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-40 px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-6xl w-full"
        >
          <div className="w-40 h-40 flex items-center justify-center mx-auto mb-16 relative">
            <div className="absolute inset-0 bg-champagne/20 blur-3xl rounded-full animate-pulse-slow" />
            <img src={logoPath} alt="AXS Branding" className="w-full h-full object-contain relative z-10 animate-logo-flare" referrerPolicy="no-referrer" />
          </div>
          <h2 className="font-display text-5xl md:text-[8rem] font-bold tracking-tighter mb-12 text-white leading-[0.85]">
            THE STUDIO FOR THE<br />
            <span className="text-gradient-champagne">NEXT GENERATION.</span>
          </h2>
          <p className="text-2xl text-glass-muted max-w-3xl mx-auto leading-relaxed mb-20 font-light">
            AXS is in active development. We are building the memory layer that connects every step of cinematic production. Back the build or join early access to shape the future of storytelling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
            <Link to="/early-access">
              <button className="group px-16 py-6 bg-white text-black font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-champagne hover:scale-110 transition-all duration-500 flex items-center gap-3">
                Back the Build <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
            <Link to="/early-access">
              <button className="group px-16 py-6 glass-premium border-white/10 font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-white/5 hover:scale-110 transition-all duration-500 flex items-center gap-3">
                Join Early Access <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 text-[10px] font-bold tracking-[0.3em] text-glass-muted uppercase">
             <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-champagne" /> Indie Houses</div>
             <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-intel-cyan" /> AI Filmmakers</div>
             <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-champagne" /> Creative Agencies</div>
             <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-intel-cyan" /> Solo Founders</div>
          </div>
        </motion.div>
      </section>

      <FinalBranding />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/early-access" element={<EarlyAccess />} />
    </Routes>
  );
}
