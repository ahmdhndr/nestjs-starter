import { ConfigModule } from '@core/config';
import { Test, TestingModule } from '@nestjs/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppModule } from './app.module';

describe('AppModule', () => {
  let moduleRef: TestingModule;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [AppRoutingModule, ConfigModule, AppModule],
    }).compile();
  });

  it('should compile the AppModule', () => {
    expect(moduleRef).toBeDefined();
  });
});
