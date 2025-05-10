import { ZodValidationPipe } from '@core/pipes';
import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiParam } from '@nestjs/swagger';

import { BaseService } from './base.service';
import { GreetingDto, greetingSchema } from './dto/greeting.dto';

@Controller()
export class BaseController {
  constructor(private readonly baseService: BaseService) {}

  @Get()
  getHello() {
    return this.baseService.getHello();
  }

  @Post()
  @ApiParam({ name: 'message', description: 'Message to be sent' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        fullName: { type: 'string', example: 'John' },
      },
    },
  })
  greeting(
    @Body(new ZodValidationPipe(greetingSchema)) greetingDto: GreetingDto,
  ) {
    return this.baseService.greeting(greetingDto);
  }

  @Get('error')
  getError() {
    return this.baseService.getError();
  }

  @Get('internal-error')
  getInternalError() {
    throw new InternalServerErrorException('Internal server error');
  }
}
