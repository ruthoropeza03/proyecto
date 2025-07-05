import { s as sql } from '../../chunks/db_Bbm3shFh.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const form = await request.formData();
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    if (!name || !email || !message) {
      return new Response("Faltan campos obligatorios", { status: 400 });
    }
    await sql`INSERT INTO contacts (name, email, message) VALUES (${name}, ${email}, ${message})`;
    return new Response(null, {
      status: 302,
      headers: { Location: "/contact?success=1" }
    });
  } catch (e) {
    return new Response("Error al guardar el contacto", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
