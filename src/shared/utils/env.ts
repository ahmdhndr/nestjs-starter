import { envSchema } from '@core/config';

export const env = envSchema.parse(process.env);
