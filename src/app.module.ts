import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { EjemploLdapModule } from './modulos/ejemplo-ldap/ejemplo-ldap.module';
import { SeguridadModule } from './modulos/seguridad/seguridad.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EjemploLdapModule,
    SeguridadModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
