import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const links = [
  { label: "Email", val: "aniruddhasharma@email.com", href: "mailto:aniruddhasharma@email.com" },
  { label: "GitHub", val: "Aniruddha-Sharma-1405", href: "https://github.com/Aniruddha-Sharma-1405" },
  { label: "LinkedIn", val: "aniruddha-sharma", href: "https://in.linkedin.com/in/aniruddha-sharma-85525a1a1" },
  { label: "Portfolio", val: "ani-portfolio", href: "https://aniruddha-sharma-1405.github.io/ani-portfolio/" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" style={{
      background: "var(--black)",
      textAlign: "center",
      padding: "140px 60px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Big glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 10, letterSpacing: 4,
            textTransform: "uppercase", color: "var(--gold)",
            marginBottom: 24,
          }}
        >06 — Contact</motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(52px, 7vw, 100px)",
            fontWeight: 300,
            lineHeight: 0.95,
            color: "var(--white)",
            marginBottom: 72,
          }}
        >
          Let's build
          <em style={{
            fontStyle: "italic",
            color: "var(--gold-light)",
            display: "block",
          }}>something.</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: "flex", justifyContent: "center",
            gap: 0, flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          {links.map((l, i) => (
            <div key={l.label} style={{ display: "flex", alignItems: "center" }}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="hoverable"
                style={{
                  display: "flex", flexDirection: "column",
                  alignItems: "center", gap: 8,
                  padding: "0 40px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.querySelector(".cval").style.color = "var(--gold-light)";
                  e.currentTarget.querySelector(".clabel").style.color = "var(--gold)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.querySelector(".cval").style.color = "var(--white-dim)";
                  e.currentTarget.querySelector(".clabel").style.color = "var(--gold-dim)";
                }}
              >
                <span className="clabel" style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 9, letterSpacing: 2,
                  textTransform: "uppercase", color: "var(--gold-dim)",
                  transition: "color 0.3s",
                }}>{l.label}</span>
                <span className="cval" style={{
                  fontSize: 14, color: "var(--white-dim)",
                  transition: "color 0.3s",
                }}>{l.val}</span>
              </a>
              {i < links.length - 1 && (
                <div style={{
                  width: 1, height: 36, alignSelf: "center",
                  background: "rgba(201,168,76,0.15)",
                }} />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
