import { LoggerModule } from '@core/common';
import { Module } from '@nestjs/common';

import { AppModule } from './modules/app/app.module';

@Module({
  imports: [LoggerModule, AppModule],
})
export class AppRoutingModule {}
