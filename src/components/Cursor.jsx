import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };
    document.addEventListener("mousemove", onMove);

    const addHover = () => {
      const els = document.querySelectorAll("a, button, .hoverable");
      els.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          isHovering.current = true;
          if (ringRef.current) ringRef.current.classList.add("hover");
        });
        el.addEventListener("mouseleave", () => {
          isHovering.current = false;
          if (ringRef.current) ringRef.current.classList.remove("hover");
        });
      });
    };
    setTimeout(addHover, 500);

    let raf;
    const tick = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.1;
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.current.rx - 18}px, ${pos.current.ry - 18}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{
        width: 10, height: 10,
        background: "var(--gold)",
        borderRadius: "50%",
        position: "fixed", top: 0, left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen",
        transition: "transform 0.05s linear",
      }} />
      <div ref={ringRef} style={{
        position: "fixed", top: 0, left: 0,
        pointerEvents: "none",
        zIndex: 9998,
      }} className="cursor-ring" />
      <style>{`
        .cursor-ring {
          width: 36px; height: 36px;
          border: 1px solid rgba(201,168,76,0.5);
          border-radius: 50%;
          transition: width 0.2s ease, height 0.2s ease, border-color 0.2s ease;
        }
        .cursor-ring.hover {
          width: 52px; height: 52px;
          border-color: var(--gold);
        }
      `}</style>
    </>
  );
}
