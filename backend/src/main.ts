import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // Servir les fichiers Angular
  app.use(express.static(join(__dirname, '..', 'public')));

  // Pour toutes les routes non-API, renvoyer index.html
  app.getHttpAdapter().get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
