import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { ZodValidationPipe } from '@shared/pipes';

import { AppService } from './app.service';
import { GreetingDto, greetingSchema } from './dto/greeting.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
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
    return this.appService.greeting(greetingDto);
  }

  @Get('error')
  getError() {
    return this.appService.getError();
  }
}
