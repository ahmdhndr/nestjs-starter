import { BadRequestException, Injectable } from '@nestjs/common';
import { successResponse } from '@shared/utils';

import { GreetingDto } from './dto/greeting.dto';

@Injectable()
export class BaseService {
  getHello() {
    return successResponse<string>('Welcome to NestJS starter template 🚀');
  }

  greeting(greetingDto: GreetingDto) {
    return successResponse<GreetingDto | null>(
      null,
      `Hello ${greetingDto.fullName}`,
    );
  }

  getError() {
    throw new BadRequestException('This is a bad request error');
  }
}
