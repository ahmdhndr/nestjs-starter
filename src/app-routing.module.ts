import { LoggerModule } from '@core/common';
import { AppModule } from '@modules/app';
import { Module } from '@nestjs/common';

@Module({
  imports: [LoggerModule, AppModule],
})
export class AppRoutingModule {}
