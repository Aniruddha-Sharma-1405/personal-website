import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0,
        padding: scrolled ? "16px 60px" : "28px 60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        zIndex: 100,
        backdropFilter: "blur(16px)",
        background: scrolled ? "rgba(8,8,8,0.92)" : "rgba(8,8,8,0.5)",
        borderBottom: "1px solid rgba(201,168,76,0.08)",
        transition: "all 0.4s ease",
      }}
    >
      <a href="#hero" style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 20,
        fontWeight: 300,
        letterSpacing: 4,
        color: "var(--gold-light)",
        textTransform: "uppercase",
        textDecoration: "none",
      }}>A·S</a>

      <ul style={{ display: "flex", gap: 40, listStyle: "none" }}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "var(--white-dim)",
              textDecoration: "none",
              position: "relative",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--gold-light)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--white-dim)"}
            >{l.label}</a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
