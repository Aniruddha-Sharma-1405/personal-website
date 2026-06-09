import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { experience } from "../data/content";

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: "relative", marginBottom: 56 }}
      className="hoverable"
    >
      {/* Diamond dot */}
      <motion.div
        whileHover={{ scale: 1.4 }}
        style={{
          position: "absolute", left: -38, top: 6,
          width: 12, height: 12,
          border: "1px solid var(--gold)",
          background: "var(--black)",
          transform: "rotate(45deg)",
          transformOrigin: "center",
          cursor: "default",
          transition: "background 0.3s",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "var(--gold)"}
        onMouseLeave={e => e.currentTarget.style.background = "var(--black)"}
      />

      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 10, letterSpacing: 2,
        color: "var(--gold-dim)",
        marginBottom: 8, textTransform: "uppercase",
      }}>{item.period}</div>

      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 30, fontWeight: 400,
        color: "var(--white)", marginBottom: 4,
      }}>{item.role}</div>

      <div style={{
        fontSize: 13, fontWeight: 400,
        color: "var(--gold)", letterSpacing: 1, marginBottom: 16,
      }}>{item.company} · {item.location}</div>

      <p style={{
        fontSize: 14, lineHeight: 1.75,
        color: "var(--white-dim)", maxWidth: 600,
      }}>{item.desc}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
        {item.tags.map(t => (
          <span key={t} style={{
            padding: "4px 12px",
            background: "var(--matte-stone)",
            border: "1px solid rgba(201,168,76,0.1)",
            fontFamily: "'DM Mono', monospace",
            fontSize: 10, letterSpacing: 1,
            color: "var(--gold-dim)", textTransform: "uppercase",
          }}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "120px 60px", background: "var(--black-1)" }}>
      <SectionHeader index="03" label="Career" title="Where I've" italic="worked" />

      <div style={{
        position: "relative",
        paddingLeft: 32,
      }}>
        {/* Vertical timeline line */}
        <div style={{
          position: "absolute", left: 0, top: 8, bottom: 8,
          width: 1,
          background: "linear-gradient(180deg, var(--gold) 0%, rgba(201,168,76,0.05) 100%)",
        }} />

        {experience.map((item, i) => (
          <TimelineItem key={item.company} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
