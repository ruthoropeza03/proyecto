import { c as createComponent, e as renderHead, r as renderTemplate } from '../chunks/astro/server_Dn-3qLGO.mjs';
import 'kleur/colors';
import 'clsx';
import { neon } from '@neondatabase/serverless';
export { renderers } from '../renderers.mjs';

const $$TestDb = createComponent(async ($$result, $$props, $$slots) => {
  const sql = neon("postgres://neondb_owner:npg_aXHnwtgZI03M@ep-bitter-bush-ad42rtfi-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require");
  const response = await sql`SELECT version()`;
  const postgresVersion = response[0].version;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><title>Prueba de Base de Datos</title>${renderHead()}</head> <body> <h1>Prueba de conexión a Neon Postgres</h1> ${postgresVersion ? renderTemplate`<div style="color: green; padding: 1rem; background: #f0f0f0;">
✅ Conexión exitosa! Versión de PostgreSQL: <strong>${postgresVersion}</strong> </div>` : renderTemplate`<div style="color: red;">
❌ No se pudo conectar a la base de datos
</div>`} <p>Visita <a href="/">la página principal</a></p> </body></html>`;
}, "C:/Users/USER/proyecto/src/pages/test-db.astro", void 0);
const $$file = "C:/Users/USER/proyecto/src/pages/test-db.astro";
const $$url = "/test-db";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$TestDb,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
