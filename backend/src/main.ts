import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.setGlobalPrefix('api');

  // Servir les fichiers Angular
  app.use(express.static(join(__dirname, '..', 'public', 'browser')));

  // // Pour toutes les routes non-API, renvoyer index.html
  // app.getHttpAdapter().get('*', (req, res) => {
  //   if (req.path.startsWith('/api')) {
  //       return res.status(404).send('Not Found');
  //   } else {
  //     res.sendFile(join(__dirname, '..', 'public', 'browser', 'index.html'));
  //   }
  // });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
