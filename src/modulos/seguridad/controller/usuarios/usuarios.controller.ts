import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';

import { UsuariosService } from '../../servicios/usuarios/usuarios.service';
import { UsuariosDto } from '../../dto/usuarios.dto';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GenericoDto } from 'src/dto/generico.dto';
import { UsuariosResponseDto } from '../../dto/usuarios_response.dto';

@Controller('usuarios')
@ApiTags("Seguridad/Usuarios")
export class UsuariosController {
    constructor(private usuariosService: UsuariosService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'Arreglo con datos', type: [UsuariosResponseDto] })
    @HttpCode(HttpStatus.OK)
    index() {
        return this.usuariosService.getDatos();
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Dato por ID', type: UsuariosResponseDto })
    @ApiParam({ name: 'id', description: 'ID', type: Number })
    @HttpCode(HttpStatus.OK)
    show(@Param() params) {
        return this.usuariosService.getDato(parseInt(params.id));
    }

    @Post()
    @ApiResponse({ status: 201, description: 'Se crea registro exitosamente', type: GenericoDto })
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: UsuariosDto) {
        return this.usuariosService.addDatos(dto);
    }

    @Put(':id')
    @ApiParam({ name: 'id', description: 'ID', type: Number })
    @ApiResponse({ status: 200, description: 'Se modifica registro exitosamente', type: GenericoDto })
    @HttpCode(HttpStatus.OK)
    update(@Param() params, @Body() dto: UsuariosDto) {
        return this.usuariosService.updateDatos(parseInt(params.id), dto)
    }

    @Delete(':id')
    @ApiParam({ name: 'id', description: 'ID', type: Number })
    @ApiResponse({ status: 200, description: 'Se elimina registro exitosamente', type: GenericoDto })
    @HttpCode(HttpStatus.OK)
    destroy(@Param() params) {
        return this.usuariosService.deleteDato(parseInt(params.id));
    }
}
