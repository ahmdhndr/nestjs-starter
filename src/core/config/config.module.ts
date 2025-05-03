import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { envSchema } from './env.schema';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      validate: (config: Record<string, unknown>) => {
        const result = envSchema.safeParse(config);
        if (!result.success) {
          console.error(
            '❌ Invalid environment variables:',
            result.error.format(),
          );
          process.exit(1);
        }
        return result.data;
      },
    }),
  ],
})
export class ConfigModule {}
