import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

const facts = [
  { num: "3+", label: "Years Industry Exp." },
  { num: "VIT", label: "B.Tech Graduate" },
  { num: "10+", label: "Projects Shipped" },
  { num: "∞", label: "Lines of Clean Code" },
];

function FactCard({ num, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="hoverable"
      style={{
        background: "var(--black-3)",
        padding: "28px 24px",
        border: "1px solid rgba(201,168,76,0.08)",
        transition: "border-color 0.3s, background 0.3s",
        cursor: "default",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.28)";
        e.currentTarget.style.background = "var(--matte-stone)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.08)";
        e.currentTarget.style.background = "var(--black-3)";
      }}
    >
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 42, fontWeight: 300,
        color: "var(--gold)", lineHeight: 1,
      }}>{num}</div>
      <div style={{
        fontSize: 11, fontWeight: 400,
        letterSpacing: 1, color: "var(--white-dim)",
        marginTop: 6, textTransform: "uppercase",
      }}>{label}</div>
    </motion.div>
  );
}

export default function About() {
  const textRef = useRef(null);
  const inView = useInView(textRef, { once: true, margin: "-80px" });

  return (
    <section id="about" style={{ padding: "120px 60px", background: "var(--black-1)" }}>
      <SectionHeader index="01" label="Profile" title="Who I" italic="am" />

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "start",
      }}>
        {/* Left: text + facts */}
        <div ref={textRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              <>I'm Aniruddha — a software engineer at <strong style={{ color: "var(--white)", fontWeight: 500 }}>Amdocs</strong> who believes great software is architecture, craft, and intention combined. I graduated from <strong style={{ color: "var(--white)", fontWeight: 500 }}>Vellore Institute of Technology</strong> and have been building production systems ever since.</>,
              <>My philosophy is simple: write code that others can read, build systems that scale, and never ship something you wouldn't be proud to sign your name to. I'm obsessed with the details — the kind of engineer who loses sleep over an inelegant abstraction.</>,
              <>Outside of work I explore <strong style={{ color: "var(--white)", fontWeight: 500 }}>machine learning</strong>, contribute to open source, and enjoy turning complex problems into clean, simple solutions.</>,
            ].map((p, i) => (
              <p key={i} style={{
                fontSize: 15, lineHeight: 1.85,
                color: "var(--white-dim)",
                marginBottom: 20,
              }}>{p}</p>
            ))}
          </motion.div>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 2, marginTop: 48,
          }}>
            {facts.map((f, i) => (
              <FactCard key={f.label} {...f} delay={0.1 * i} />
            ))}
          </div>
        </div>

        {/* Right: Profile visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "sticky", top: 120 }}
        >
          <div style={{ position: "relative", maxWidth: 380, margin: "0 auto" }}>
            <div style={{
              width: "100%", aspectRatio: "3/4",
              background: "var(--black-3)",
              border: "1px solid rgba(201,168,76,0.1)",
              position: "relative", overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 110, fontWeight: 300,
                color: "rgba(201,168,76,0.1)",
                letterSpacing: -6, userSelect: "none",
              }}>AS</div>
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 60%)",
              }} />
              {/* Horizontal scan line effect */}
              <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                style={{
                  position: "absolute", left: 0, right: 0,
                  height: 2,
                  background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)",
                }}
              />
            </div>
            {/* Corner accents */}
            {[
              { top: -8, left: -8, borderWidth: "1px 0 0 1px" },
              { bottom: -8, right: -8, borderWidth: "0 1px 1px 0" },
            ].map((s, i) => (
              <div key={i} style={{
                position: "absolute",
                width: 40, height: 40,
                border: "solid var(--gold)",
                ...s,
              }} />
            ))}
          </div>

          {/* Status badge */}
          <div style={{
            marginTop: 28,
            display: "flex", alignItems: "center", gap: 10,
            justifyContent: "center",
          }}>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#4CAF50", display: "inline-block",
                boxShadow: "0 0 8px rgba(76,175,80,0.6)",
              }}
            />
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10, letterSpacing: 2,
              color: "var(--white-dim)",
              textTransform: "uppercase",
            }}>Available for opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
