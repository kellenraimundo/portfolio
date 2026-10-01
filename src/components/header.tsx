"use client";
import { useState } from "react";

const links = [["Sobre", "sobre"], ["Atuação", "atuacao"], ["Experiência", "experiencia"], ["Stack", "stack"]];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <a className="wordmark" href="#inicio" aria-label="Kellén Raimundo, início" onClick={() => setOpen(false)}>kr<span>.</span></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? "Fechar −" : "Menu +"}</button>
    <nav id="navigation" className={open ? "navigation is-open" : "navigation"} aria-label="Navegação principal">
      {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-contact" href="#contato" onClick={() => setOpen(false)}>Vamos conversar <span aria-hidden="true">↗</span></a>
    </nav>
  </header>;
}
