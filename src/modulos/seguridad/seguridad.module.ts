import { Module } from '@nestjs/common';
import { EstadosService } from './servicios/estados/estados.service';
import { EstadosController } from './controller/estados/estados.controller';
import { ModulosController } from './controller/modulos/modulos.controller';
import { PerfilesController } from './controller/perfiles/perfiles.controller';
import { UsuariosController } from './controller/usuarios/usuarios.controller';
import { ModulosService } from './servicios/modulos/modulos.service';
import { PerfilesService } from './servicios/perfiles/perfiles.service';
import { UsuariosService } from './servicios/usuarios/usuarios.service';
import { PerfilesModulosService } from './servicios/perfiles_modulos/perfiles_modulos.service';
import { PerfilesModulosController } from './controller/perfiles_modulos/perfiles_modulos.controller';

@Module({
  providers: [EstadosService, ModulosService, PerfilesService, UsuariosService, PerfilesModulosService],
  controllers: [EstadosController, ModulosController, PerfilesController, UsuariosController, PerfilesModulosController]
})
export class SeguridadModule {}
