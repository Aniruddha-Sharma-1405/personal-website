import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { achievements } from "../data/content";

function AchCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="hoverable"
      style={{
        padding: "44px 40px",
        background: "var(--black-3)",
        border: "1px solid rgba(201,168,76,0.08)",
        display: "flex", gap: 28,
        transition: "all 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "var(--matte-stone)";
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.22)";
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "var(--black-3)";
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.08)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ fontSize: 28, flexShrink: 0, marginTop: 4 }}>{item.icon}</div>
      <div>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 22, fontWeight: 400,
          color: "var(--white)", marginBottom: 8,
        }}>{item.title}</div>
        <p style={{
          fontSize: 13, lineHeight: 1.75, color: "var(--white-dim)",
        }}>{item.body}</p>
        <span style={{
          display: "inline-block", marginTop: 14,
          padding: "4px 10px",
          background: "rgba(201,168,76,0.07)",
          border: "1px solid rgba(201,168,76,0.22)",
          fontFamily: "'DM Mono', monospace",
          fontSize: 9, letterSpacing: 1.5,
          textTransform: "uppercase", color: "var(--gold)",
        }}>{item.badge}</span>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: "120px 60px", background: "var(--black-1)" }}>
      <SectionHeader index="05" label="Recognition" title="Achievements &" italic="Awards" />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 2,
      }}>
        {achievements.map((a, i) => (
          <AchCard key={a.title} item={a} index={i} />
        ))}
      </div>
    </section>
  );
}
