import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Business Logic API')
    .setDescription("The MaraffaOnline's business logic API")
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.enableCors();
  console.log(
    `🔍 Traces are being sent to: ${process.env.OTEL_EXPORTER_OTLP_ENDPOINT}`,
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
