export const prerender = false;
import sql from '../../lib/db.js';

export async function POST({ request }) {
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
}

export async function PUT({ request }) {
  try {
    const data = await request.json();
    const { id, name, email, message } = data;
    if (!id || !name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: 'Faltan campos obligatorios' }), { status: 400 });
    }
    await sql`UPDATE contacts SET name=${name}, email=${email}, message=${message} WHERE id=${id}`;
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ success: false, error: 'Error al actualizar el contacto' }), { status: 500 });
  }
}

export async function GET({ url }) {
  try {
    const id = url.searchParams.get('id');
    if (!id) return new Response('Falta el id', { status: 400 });
    const [contact] = await sql`SELECT id, name, email, message FROM contacts WHERE id=${id}`;
    if (!contact) return new Response('No encontrado', { status: 404 });
    return new Response(JSON.stringify(contact), { status: 200 });
  } catch (e) {
    return new Response('Error al obtener el contacto', { status: 500 });
  }
}
