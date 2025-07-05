import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate } from './astro/server_Dn-3qLGO.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { text: "Inicio", url: "/" },
    { text: "Acerca de", url: "/about" },
    { text: "Contacto", url: "/contact" },
    { text: "Resultados", url: "/results" }
  ];
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <ul style="display: flex; gap: 1rem; list-style: none;" data-astro-cid-3ef6ksr2> ${links.map((link) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(link.url, "href")} style="text-decoration: none; color: inherit;" data-astro-cid-3ef6ksr2> ${link.text} </a> </li>`)} </ul> </nav> </header> `;
}, "C:/Users/USER/proyecto/src/components/Header.astro", void 0);

export { $$Header as $ };
