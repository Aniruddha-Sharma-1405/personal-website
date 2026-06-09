import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { techStack } from "../data/content";

function TechPill({ name, featured, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className="hoverable"
      style={{
        padding: "10px 20px",
        border: `1px solid ${featured ? "rgba(201,168,76,0.35)" : "rgba(201,168,76,0.12)"}`,
        fontFamily: "'DM Mono', monospace",
        fontSize: 12, letterSpacing: 1,
        color: featured ? "var(--gold-light)" : "var(--white-dim)",
        background: featured ? "var(--matte-stone)" : "var(--black-3)",
        cursor: "default",
        transition: "all 0.3s ease",
        position: "relative", overflow: "hidden",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "var(--gold)";
        e.currentTarget.style.color = "var(--gold-light)";
        e.currentTarget.style.background = "rgba(201,168,76,0.1)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = featured ? "rgba(201,168,76,0.35)" : "rgba(201,168,76,0.12)";
        e.currentTarget.style.color = featured ? "var(--gold-light)" : "var(--white-dim)";
        e.currentTarget.style.background = featured ? "var(--matte-stone)" : "var(--black-3)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >{name}</motion.div>
  );
}

export default function Stack() {
  return (
    <section id="stack" style={{ padding: "120px 60px", background: "var(--black-2)" }}>
      <SectionHeader index="02" label="Expertise" title="Tech" italic="Stack" />

      <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        {Object.entries(techStack).map(([cat, items], ci) => {
          const catRef = useRef(null);
          const catInView = useInView(catRef, { once: true, margin: "-60px" });

          return (
            <div key={cat} ref={catRef}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={catInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10, letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "var(--gold-dim)",
                  marginBottom: 20,
                  paddingBottom: 12,
                  borderBottom: "1px solid rgba(201,168,76,0.1)",
                }}
              >{cat}</motion.div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {items.map((item, ii) => (
                  <TechPill
                    key={item.name}
                    name={item.name}
                    featured={item.featured}
                    delay={ci * 0.05 + ii * 0.04}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
