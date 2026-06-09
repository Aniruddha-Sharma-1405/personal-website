import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionHeader({ index, label, title, italic }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 10, letterSpacing: 4,
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: 16,
          display: "flex", alignItems: "center", gap: 16,
        }}
      >
        <span style={{ width: 30, height: 1, background: "var(--gold)", display: "inline-block" }} />
        {index} — {label}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(40px, 5vw, 68px)",
          fontWeight: 300,
          lineHeight: 1.05,
          color: "var(--white)",
          marginBottom: 64,
        }}
      >
        {title}{" "}
        {italic && <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>{italic}</em>}
      </motion.h2>
    </div>
  );
}
