import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { EstadosService } from '../../servicios/estados/estados.service';
import { EstadoDto } from '../../dto/estado.dto';
import { EstadosInterface } from 'src/interfaces/estados.interface';
import { GeneralInterface } from 'src/interfaces/general-interface.interface';

@Controller('estados')
export class EstadosController {

    constructor(private estadosService:EstadosService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    index():Promise<EstadosInterface[]> 
    {
        return this.estadosService.getDatos();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    show(@Param() params):Promise<EstadosInterface>
    {
        return this.estadosService.getDato(parseInt(params.id));
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto:EstadoDto):Promise<GeneralInterface>
    {
        return this.estadosService.addDatos(dto);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param() params, @Body() dto:EstadoDto):Promise<GeneralInterface>
    {
        return this.estadosService.updateDatos(parseInt(params.id), dto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    destroy(@Param() params):Promise<GeneralInterface>
    {
        return this.estadosService.deleteDato(parseInt(params.id));
    }
}
