import { neon } from '@neondatabase/serverless';

// Crea y exporta una instancia de conexión reutilizable
const sql = neon(import.meta.env.DATABASE_URL!);
export default sql;
