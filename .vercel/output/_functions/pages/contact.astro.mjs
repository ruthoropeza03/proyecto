import { c as createComponent, b as createAstro, d as renderComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_Dn-3qLGO.mjs';
import 'kleur/colors';
import { $ as $$Header } from '../chunks/Header_D3bhzuHx.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  let message = "";
  if (Astro2.url.searchParams.get("success") === "1") {
    message = "\xA1Mensaje enviado y guardado correctamente!";
  }
  return renderTemplate`${renderComponent($$result, "Header", $$Header, {})} ${maybeRenderHead()}<main style="max-width: 600px; margin: 0 auto;"> <h1>Contacto</h1> ${message && renderTemplate`<div style="color: green; padding: 1rem; background: #f0f0f0;">${message}</div>`} <form method="POST" action="/api/contact" style="display: grid; gap: 1rem;"> <div> <label for="name">Nombre:</label> <input type="text" id="name" name="name" required style="width: 100%; padding: 0.5rem;"> </div> <div> <label for="email">Email:</label> <input type="email" id="email" name="email" required style="width: 100%; padding: 0.5rem;"> </div> <div> <label for="message">Mensaje:</label> <textarea id="message" name="message" rows="5" required style="width: 100%; padding: 0.5rem;"></textarea> </div> <button type="submit" style="padding: 0.75rem; background: #0070f3; color: white; border: none; cursor: pointer;">
Enviar Mensaje
</button> </form> </main>`;
}, "C:/Users/USER/proyecto/src/pages/contact.astro", void 0);

const $$file = "C:/Users/USER/proyecto/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
