import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors({
    origin: 'http://localhost:5173', // Reemplaza con el origen de tu frontend
    credentials: true, // Permite incluir cookies y encabezados de autenticación en la solicitud
  }));

  await app.listen(3000);
}
bootstrap();
