import { BadRequestException, Injectable } from '@nestjs/common';
import { successResponse } from '@shared/utils';

@Injectable()
export class AppService {
  getHello() {
    return successResponse<string>('Welcome to NestJS starter template 🚀');
  }

  getError() {
    throw new BadRequestException('This is a bad request error');
  }
}
