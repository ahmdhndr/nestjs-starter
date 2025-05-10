import { Test, TestingModule } from '@nestjs/testing';

import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  let moduleRef: TestingModule;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [AppRoutingModule],
    }).compile();
  });

  it('should compile the AppRoutingModule', () => {
    expect(moduleRef).toBeDefined();
  });
});
