import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let controller: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    controller = module.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the success response', () => {
    expect(controller.getHello()).toEqual({
      status: 'success',
      message: 'OK',
      data: 'Welcome to NestJS starter template 🚀',
    });
  });

  it('should return the greeting message', () => {
    const greetingDto = {
      fullName: 'John',
    };

    expect(controller.greeting(greetingDto)).toEqual({
      status: 'success',
      message: 'Hello John',
      data: null,
    });
  });

  it('should throw bad request error structure', () => {
    expect(() => controller.getError()).toThrow(BadRequestException);
  });
});
