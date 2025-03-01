import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { EstadosService } from '../../servicios/estados/estados.service';
import { EstadoDto } from '../../dto/estado.dto';

@Controller('estados')
export class EstadosController {

    constructor(private estadosService:EstadosService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    index()
    {
        return this.estadosService.getDatos();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    show(@Param() params)
    {
        return this.estadosService.getDato(parseInt(params.id));
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto:EstadoDto)
    {
        return this.estadosService.addDatos(dto);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param() params, @Body() dto:EstadoDto)
    {
        return this.estadosService.updateDatos(parseInt(params.id), dto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    destroy(@Param() params)
    {
        return this.estadosService.deleteDato(parseInt(params.id));
    }
}
