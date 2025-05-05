/* istanbul ignore file */
import { AllExceptionsFilter } from '@core/filters';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { env } from '@shared/utils';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('API Docs')
    .setDescription('The list of APIs')
    .setVersion('1.0')
    .addTag('Your Great APIs')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory, {
    customSiteTitle: 'API Docs',
    jsonDocumentUrl: 'docs/json',
  });

  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(env.PORT);
}
void bootstrap();
