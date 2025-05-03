import { ConfigModule } from '@core/config';
import { Module } from '@nestjs/common';

import { AppRoutingModule } from './app-routing.module';

@Module({
  imports: [ConfigModule, AppRoutingModule],
})
export class AppModule {}
