export const prerender = false;
import sql from '../../lib/db.js';

export async function GET() {
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
}
