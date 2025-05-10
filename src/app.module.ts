import { ConfigModule } from '@core/config';
import { User } from '@modules/users';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from '@shared/utils';

import { AppRoutingModule } from './app-routing.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: env.PG_PORT,
      username: env.PG_USER,
      password: env.PG_PASS,
      database: env.PG_DB,
      entities: [User],
      synchronize: true, // shouldn't be used in production
    }),
    AppRoutingModule,
  ],
})
export class AppModule {
  constructor() {}
}
