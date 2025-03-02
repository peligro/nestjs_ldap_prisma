import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';

import { UsuariosService } from '../../servicios/usuarios/usuarios.service';
import { UsuariosDto } from '../../dto/usuarios.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('usuarios')
@ApiTags("Seguridad/Usuarios")
export class UsuariosController {
    constructor(private usuariosService: UsuariosService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    index() {
        return this.usuariosService.getDatos();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    show(@Param() params) {
        return this.usuariosService.getDato(parseInt(params.id));
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: UsuariosDto) {
        return this.usuariosService.addDatos(dto);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param() params, @Body() dto: UsuariosDto) {
        return this.usuariosService.updateDatos(parseInt(params.id), dto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    destroy(@Param() params) {
        return this.usuariosService.deleteDato(parseInt(params.id));
    }
}
