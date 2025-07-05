import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_Dn-3qLGO.mjs';
import 'kleur/colors';
import 'clsx';
import { s as sql } from '../chunks/db_Bbm3shFh.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacts = createComponent(async ($$result, $$props, $$slots) => {
  const rows = await sql`SELECT id, name, email, message, created_at FROM contacts ORDER BY created_at DESC`;
  return renderTemplate`${maybeRenderHead()}<h1>Contactos recibidos</h1> <table style="width:100%; border-collapse:collapse; margin-top:2rem;"> <thead> <tr style="background:#f0f0f0;"> <th style="border:1px solid #ccc; padding:0.5rem;">ID</th> <th style="border:1px solid #ccc; padding:0.5rem;">Nombre</th> <th style="border:1px solid #ccc; padding:0.5rem;">Email</th> <th style="border:1px solid #ccc; padding:0.5rem;">Mensaje</th> <th style="border:1px solid #ccc; padding:0.5rem;">Fecha</th> </tr> </thead> <tbody> ${rows.map((row) => renderTemplate`<tr> <td style="border:1px solid #ccc; padding:0.5rem;">${row.id}</td> <td style="border:1px solid #ccc; padding:0.5rem;">${row.name}</td> <td style="border:1px solid #ccc; padding:0.5rem;">${row.email}</td> <td style="border:1px solid #ccc; padding:0.5rem;">${row.message}</td> <td style="border:1px solid #ccc; padding:0.5rem;">${row.created_at?.toLocaleString?.() ?? row.created_at}</td> </tr>`)} </tbody> </table>`;
}, "C:/Users/USER/proyecto/src/pages/contacts.astro", void 0);

const $$file = "C:/Users/USER/proyecto/src/pages/contacts.astro";
const $$url = "/contacts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
