import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { PerfilesService } from '../../servicios/perfiles/perfiles.service';
import { PerfilesDto } from '../../dto/perfiles.dto.';
import { PerfilesInterface } from 'src/interfaces/perfiles.interface';
import { GeneralInterface } from 'src/interfaces/general-interface.interface';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PerfilesResponseDto } from '../../dto/perfiles_response.dto';
import { GenericoDto } from 'src/dto/generico.dto';

@Controller('perfiles')
@ApiTags("Seguridad/Perfiles")
export class PerfilesController {
    constructor(private perfilesService: PerfilesService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'Arreglo con datos', type: [PerfilesResponseDto] })
    @HttpCode(HttpStatus.OK)
    index():Promise<PerfilesInterface[]> {
        return this.perfilesService.getDatos();
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Dato por ID', type: PerfilesResponseDto })
    @ApiParam({ name: 'id', description: 'ID', type: Number })
    @HttpCode(HttpStatus.OK)
    show(@Param() params):Promise<PerfilesInterface> {
        return this.perfilesService.getDato(parseInt(params.id));
    }

    @Post()
    @ApiResponse({ status: 201, description: 'Se crea registro exitosamente', type: GenericoDto })
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: PerfilesDto):Promise<GeneralInterface> {
        return this.perfilesService.addDatos(dto);
    }

    @Put(':id')
    @ApiParam({ name: 'id', description: 'ID', type: Number })
    @ApiResponse({ status: 200, description: 'Se modifica registro exitosamente', type: GenericoDto })
    @HttpCode(HttpStatus.OK)
    update(@Param() params, @Body() dto: PerfilesDto):Promise<GeneralInterface> {
        return this.perfilesService.updateDatos(parseInt(params.id), dto)
    }

    @Delete(':id')
    @ApiParam({ name: 'id', description: 'ID', type: Number })
    @ApiResponse({ status: 200, description: 'Se elimina registro exitosamente', type: GenericoDto })
    @HttpCode(HttpStatus.OK)
    destroy(@Param() params):Promise<GeneralInterface> {
        return this.perfilesService.deleteDato(parseInt(params.id));
    }
}
