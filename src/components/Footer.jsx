export default function Footer() {
  return (
    <footer style={{
      background: "var(--black)",
      borderTop: "1px solid rgba(201,168,76,0.08)",
      padding: "28px 60px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 14, color: "var(--gold-dim)", fontStyle: "italic",
      }}>Crafted with obsession — Aniruddha Sharma</span>
      <span style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 10, letterSpacing: 2,
        color: "rgba(201,168,76,0.2)",
      }}>© 2025 · All rights reserved</span>
    </footer>
  );
}
