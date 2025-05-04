import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ZodError } from 'zod';

import { envSchema } from './env.schema';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      validate: (config: Record<string, unknown>) => {
        try {
          return envSchema.parse(config);
        } catch (error) {
          console.error('❌ Invalid environment variables:');
          if (error instanceof ZodError) {
            console.error(error.format());
          } else {
            console.error(error);
          }
          process.exit(1);
        }
      },
    }),
  ],
})
export class ConfigModule {}
