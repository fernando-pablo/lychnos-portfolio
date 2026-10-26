"use client";
import { useEffect } from "react";

// Faz uma luz âmbar seguir o mouse sobre os elementos marcados com data-luz.
// Só atualiza variáveis CSS; o efeito visual fica todo no globals.css.
export default function Holofote() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    function mover(e: PointerEvent) {
      const alvo = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-luz]");
      if (!alvo) return;
      const r = alvo.getBoundingClientRect();
      alvo.style.setProperty("--luz-x", `${e.clientX - r.left}px`);
      alvo.style.setProperty("--luz-y", `${e.clientY - r.top}px`);
    }
    document.addEventListener("pointermove", mover, { passive: true });
    return () => document.removeEventListener("pointermove", mover);
  }, []);
  return null;
}
