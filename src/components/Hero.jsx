import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "160px 60px 80px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Grid bg */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        pointerEvents: "none",
      }} />
      {/* Glow orb top right */}
      <div style={{
        position: "absolute", right: -200, top: -200,
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      {/* Glow orb bottom left */}
      <div style={{
        position: "absolute", left: -100, bottom: 0,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease }}
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11, letterSpacing: 4,
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: 28,
        }}
      >Software Engineer · Craftsman · Builder</motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(64px, 9vw, 130px)",
          fontWeight: 300,
          lineHeight: 0.92,
          letterSpacing: -2,
          color: "var(--white)",
        }}
      >
        Aniruddha
        <em style={{ color: "var(--gold-light)", fontStyle: "italic", display: "block" }}>Sharma</em>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease }}
        style={{
          marginTop: 36,
          fontSize: 15, fontWeight: 300,
          color: "var(--white-dim)",
          maxWidth: 500,
          lineHeight: 1.75,
        }}
      >
        Engineering robust, elegant systems at{" "}
        <strong style={{ color: "var(--white)", fontWeight: 500 }}>Amdocs</strong>.
        Passionate about clean architecture, distributed systems, and
        building software that lasts.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.65, ease }}
        style={{ marginTop: 56, display: "flex", gap: 20, alignItems: "center" }}
      >
        <a href="#projects" className="hoverable" style={{
          padding: "14px 36px",
          background: "var(--gold)",
          color: "var(--black)",
          fontFamily: "'DM Mono', monospace",
          fontSize: 11, letterSpacing: 2.5,
          textTransform: "uppercase",
          fontWeight: 500,
          transition: "all 0.3s ease",
          display: "inline-block",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "var(--gold-light)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "translateY(0)"; }}
        >View Work</a>

        <a href="#contact" className="hoverable" style={{
          padding: "14px 36px",
          border: "1px solid rgba(201,168,76,0.4)",
          color: "var(--gold-light)",
          fontFamily: "'DM Mono', monospace",
          fontSize: 11, letterSpacing: 2.5,
          textTransform: "uppercase",
          transition: "all 0.3s ease",
          display: "inline-block",
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.background = "rgba(201,168,76,0.08)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.background = "transparent"; }}
        >Get In Touch</a>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: "absolute", bottom: 48, left: 60,
          display: "flex", alignItems: "center", gap: 14,
          fontFamily: "'DM Mono', monospace",
          fontSize: 10, letterSpacing: 3,
          textTransform: "uppercase",
          color: "var(--gold-dim)",
        }}
      >
        <motion.span
          animate={{ width: ["40px", "70px", "40px"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ height: 1, background: "var(--gold-dim)", display: "inline-block" }}
        />
        Scroll to explore
      </motion.div>

      {/* Big ghost number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          position: "absolute", right: 60, bottom: 20,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 160, fontWeight: 300,
          color: "rgba(201,168,76,0.035)",
          lineHeight: 1, letterSpacing: -8,
          userSelect: "none", pointerEvents: "none",
        }}
      >01</motion.div>
    </section>
  );
}
