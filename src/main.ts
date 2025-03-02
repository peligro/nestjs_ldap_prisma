import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//npm i --save class-validator class-transformer
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   //swagger

   const config = new DocumentBuilder()
   .setTitle('API desde el curso fullstack')
   .setDescription('API creada de ejemplo para curso fullstack con Nestjs y Prisma ORM')
   .setVersion('1.0.0')
   .addTag("Seguridad/Estados")
   .addTag("Seguridad/Módulos")
   .addTag("Seguridad/Perfiles")
   .addTag("Seguridad/Usuarios")
   .addTag("Seguridad/Perfiles Módulos")
   .addTag("LDAP")
   .build();
   let document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('documentacion', app, document);
  //validaciones para DTO
  app.useGlobalPipes(new ValidationPipe());
  //cors
  app.enableCors(); 
  //prefijo API
  app.setGlobalPrefix(process.env.PREFIJO+"");
  //despliegue y puerto
  await app.listen(""+process.env.PORT );
}
bootstrap();
