import { useId } from "react";

// Lamparina da Lychnos Tech em vetor: nítida em qualquer tamanho (cabeçalho, rodapé, ícone da aba).
export default function LogoMarca({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const g = (nome: string) => `url(#${nome}-${id})`;
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <linearGradient id={`aco-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4f7fb" />
          <stop offset=".35" stopColor="#b9c3cf" />
          <stop offset=".5" stopColor="#6f7a89" />
          <stop offset=".68" stopColor="#dfe5ec" />
          <stop offset="1" stopColor="#8994a3" />
        </linearGradient>
        <linearGradient id={`acoV-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef2f7" />
          <stop offset=".55" stopColor="#9aa5b3" />
          <stop offset="1" stopColor="#5d6877" />
        </linearGradient>
        <linearGradient id={`arco-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfd7e1" />
          <stop offset=".5" stopColor="#7d8898" />
          <stop offset="1" stopColor="#4ea8ff" />
        </linearGradient>
        <radialGradient id={`chama-${id}`} cx=".45" cy=".8" r=".75">
          <stop offset="0" stopColor="#fff6dc" />
          <stop offset=".35" stopColor="#ffd27a" />
          <stop offset=".75" stopColor="#f5a524" />
          <stop offset="1" stopColor="#c26a10" />
        </radialGradient>
      </defs>
      <path d="M40 86 A38 38 0 0 1 40 18" fill="none" stroke={g("arco")} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M80 18 A38 38 0 0 1 80 86" fill="none" stroke={g("arco")} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M47 14 L57 8 L57 70 L47 70 Z" fill={g("aco")} />
      <path d="M57 8 L60 10 L60 70 L57 70 Z" fill="#5f6a79" />
      <path d="M60 18 C70 26 81 40 78 54 C76 63 68 69 60 70 Z" fill={g("acoV")} />
      <path d="M60 18 C70 26 81 40 78 54 C77 58 75 61 72 64 C75 52 70 38 60 30 Z" fill="#eef2f7" opacity=".55" />
      <path className="logo-chama" d="M60 38 C64 46 72 52 70 60 C69 65 65 68 60 69 Z" fill={g("chama")} />
      <path d="M42 70 L78 70 L73 76 L47 76 Z" fill={g("aco")} />
      <path d="M46 79 L74 79 L72 83 L48 83 Z" fill={g("acoV")} />
      <path d="M49 86 L71 86 L69 90 L51 90 Z" fill={g("acoV")} />
      <path d="M52 93 L68 93 L66 97 L54 97 Z" fill={g("acoV")} />
      <path d="M55 99 L65 99 C64 103 56 103 55 99 Z" fill={g("chama")} />
    </svg>
  );
}
