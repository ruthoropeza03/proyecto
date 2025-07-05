export const prerender = false;
import type { APIRoute } from 'astro';
import sql from '../../lib/db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const form = await request.formData();
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    if (!name || !email || !message) {
      return new Response('Faltan campos obligatorios', { status: 400 });
    }
    await sql`INSERT INTO contacts (name, email, message) VALUES (${name}, ${email}, ${message})`;
    return new Response(null, {
      status: 302,
      headers: { Location: '/contact?success=1' }
    });
  } catch (e) {
    return new Response('Error al guardar el contacto', { status: 500 });
  }
};
