import { LoggerModule } from '@core/common';
import { AppModule } from '@modules/app';
import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [LoggerModule, AppModule, AuthModule, UsersModule],
})
export class AppRoutingModule {}
