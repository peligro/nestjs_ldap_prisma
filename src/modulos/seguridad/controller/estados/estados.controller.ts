import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { EstadosService } from '../../servicios/estados/estados.service';
import { EstadoDto } from '../../dto/estado.dto';
import { EstadosInterface } from 'src/interfaces/estados.interface';
import { GeneralInterface } from 'src/interfaces/general-interface.interface';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EstadoResponseDto } from '../../dto/estado_response.dto';
import { GenericoDto } from 'src/dto/generico.dto';

@Controller('estados')
@ApiTags("Seguridad/Estados")
export class EstadosController {

    constructor(private estadosService:EstadosService){}

    @Get()
    @ApiResponse({ status: 200, description: 'Arreglo de datos', type: [EstadoResponseDto] })
    @HttpCode(HttpStatus.OK)
    index():Promise<EstadosInterface[]> 
    {
        return this.estadosService.getDatos();
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Dato por ID', type: EstadoResponseDto })
    @ApiParam({ name: 'id', description: 'ID', type: Number })
    @HttpCode(HttpStatus.OK)
    show(@Param() params):Promise<EstadosInterface>
    {
        return this.estadosService.getDato(parseInt(params.id));
    }

    @Post()
    @ApiResponse({ status: 201, description: 'Se crea registro exitosamente', type: GenericoDto })
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto:EstadoDto):Promise<GeneralInterface>
    {
        return this.estadosService.addDatos(dto);
    }

    @Put(':id')
    @ApiParam({ name: 'id', description: 'ID', type: Number })
    @ApiResponse({ status: 200, description: 'Se modifica registro exitosamente', type: GenericoDto })
    @HttpCode(HttpStatus.OK)
    update(@Param() params, @Body() dto:EstadoDto):Promise<GeneralInterface>
    {
        return this.estadosService.updateDatos(parseInt(params.id), dto)
    }

    @Delete(':id')
    @ApiParam({ name: 'id', description: 'ID', type: Number })
    @ApiResponse({ status: 200, description: 'Se elimina registro exitosamente', type: GenericoDto })
    @HttpCode(HttpStatus.OK)
    destroy(@Param() params):Promise<GeneralInterface>
    {
        return this.estadosService.deleteDato(parseInt(params.id));
    }
}
