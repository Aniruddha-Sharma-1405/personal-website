import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/content";

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target={project.link !== "#" ? "_blank" : "_self"}
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="hoverable"
      style={{
        background: project.featured ? "var(--matte-stone)" : "var(--black-3)",
        border: `1px solid ${project.featured ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.07)"}`,
        padding: "40px 36px",
        position: "relative", overflow: "hidden",
        gridColumn: project.featured ? "span 2" : "span 1",
        textDecoration: "none", color: "inherit",
        display: "block",
        transition: "border-color 0.3s, box-shadow 0.4s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
        e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = project.featured ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.07)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Gradient overlay on hover */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      {/* Arrow */}
      <motion.div
        whileHover={{ x: 4, y: -4 }}
        transition={{ type: "spring", stiffness: 400 }}
        style={{
          position: "absolute", top: 36, right: 36,
          fontSize: 20, color: "var(--gold-dim)",
        }}
      >↗</motion.div>

      {/* Ghost number */}
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 64, fontWeight: 300,
        color: "rgba(201,168,76,0.07)",
        lineHeight: 1, marginBottom: 20,
        userSelect: "none",
      }}>{project.num}</div>

      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 26, fontWeight: 400,
        color: "var(--white)", marginBottom: 12,
      }}>{project.title}</div>

      <p style={{
        fontSize: 13, lineHeight: 1.75,
        color: "var(--white-dim)", marginBottom: 24,
        maxWidth: project.featured ? "60%" : "100%",
      }}>{project.desc}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tags.map(t => (
          <span key={t} style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 9, letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "var(--gold-dim)",
            padding: "3px 8px",
            border: "1px solid rgba(201,168,76,0.12)",
          }}>{t}</span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "120px 60px", background: "var(--black-2)" }}>
      <SectionHeader index="04" label="Work" title="Selected" italic="Projects" />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 2,
      }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
