import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.coerce.number().default(3000),
  PG_USER: z.string(),
  PG_PASS: z.string(),
  PG_DB: z.string(),
  PG_PORT: z.coerce.number(),
});
