export const prerender = false;
import type { APIRoute } from 'astro';
import sql from '../../lib/db';

export const GET: APIRoute = async () => {
  try {
    const response = await sql`SELECT version()`;
    const version = response[0]?.version || 'desconocida';
    return new Response(
      JSON.stringify({ ok: true, version }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ ok: false, error: String(e) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
