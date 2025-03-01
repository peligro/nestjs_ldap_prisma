import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ModulosService } from '../../servicios/modulos/modulos.service';
import { ModuloDto } from '../../dto/modulo.dto';

@Controller('modulos')
export class ModulosController {
    constructor(private modulosService: ModulosService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    index() {
        return this.modulosService.getDatos();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    show(@Param() params) {
        return this.modulosService.getDato(parseInt(params.id));
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: ModuloDto) {
        return this.modulosService.addDatos(dto);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param() params, @Body() dto: ModuloDto) {
        return this.modulosService.updateDatos(parseInt(params.id), dto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    destroy(@Param() params) {
        return this.modulosService.deleteDato(parseInt(params.id));
    }
}
