import { neon } from '@neondatabase/serverless';

const sql = neon("postgres://neondb_owner:npg_aXHnwtgZI03M@ep-bitter-bush-ad42rtfi-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require");

export { sql as s };
