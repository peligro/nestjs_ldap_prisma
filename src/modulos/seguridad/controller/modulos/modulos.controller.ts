import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ModulosService } from '../../servicios/modulos/modulos.service';
import { ModuloDto } from '../../dto/modulo.dto';
import { ModulosInterface } from 'src/interfaces/modulos.interface';
import { GeneralInterface } from 'src/interfaces/general-interface.interface';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ModuloResponseDto } from '../../dto/modulo_response.dto';
import { GenericoDto } from 'src/dto/generico.dto';

@Controller('modulos')
@ApiTags("Seguridad/Módulos")
export class ModulosController {
    constructor(private modulosService: ModulosService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 200, description: 'Arreglo con datos', type: [ModuloResponseDto] })
    index():Promise<ModulosInterface[]>  {
        return this.modulosService.getDatos();
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Dato por ID', type: ModuloResponseDto })
    @ApiParam({ name: 'id', description: 'ID', type: Number })
    @HttpCode(HttpStatus.OK)
    show(@Param() params):Promise<ModulosInterface> {
        return this.modulosService.getDato(parseInt(params.id));
    }

    @Post()
    @ApiResponse({ status: 201, description: 'Se crea registro exitosamente', type: GenericoDto })
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: ModuloDto)  {
        return this.modulosService.addDatos(dto);
    }

    @Put(':id')
    @ApiParam({ name: 'id', description: 'ID', type: Number })
    @ApiResponse({ status: 200, description: 'Se modifica registro exitosamente', type: GenericoDto })
    @HttpCode(HttpStatus.OK)
    update(@Param() params, @Body() dto: ModuloDto):Promise<GeneralInterface> {
        return this.modulosService.updateDatos(parseInt(params.id), dto)
    }

    @Delete(':id')
    @ApiParam({ name: 'id', description: 'ID', type: Number })
    @ApiResponse({ status: 200, description: 'Se elimina registro exitosamente', type: GenericoDto })
    @HttpCode(HttpStatus.OK)
    destroy(@Param() params):Promise<GeneralInterface> {
        return this.modulosService.deleteDato(parseInt(params.id));
    }
}
