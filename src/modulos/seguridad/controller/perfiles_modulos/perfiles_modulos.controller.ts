import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { PerfilesModulosService } from '../../servicios/perfiles_modulos/perfiles_modulos.service';
import { PerfilesModulosDto } from '../../dto/perfiles_modulos.dto';
import { GeneralInterface } from 'src/interfaces/general-interface.interface';
import { PerfilesModulosInterface } from 'src/interfaces/perfiles_modulos.interface';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PerfilesModulosResponseDto } from '../../dto/perfiles_modulos_response.dto';
import { GenericoDto } from 'src/dto/generico.dto';

@Controller('perfiles-modulos')
@ApiTags("Seguridad/Perfiles Módulos")
export class PerfilesModulosController {
    constructor(private perfilesModulosService: PerfilesModulosService) { }


    @Get(':id')
    @ApiResponse({ status: 200, description: 'Arreglo con datos', type: [PerfilesModulosResponseDto] })
    @HttpCode(HttpStatus.OK)
    datos_por_perfil(@Param() params):Promise<PerfilesModulosInterface[]> {
        return this.perfilesModulosService.getDatosPorPerfil(parseInt(params.id));
    }
    @Post()
    @ApiResponse({ status: 201, description: 'Se modifica registro exitosamente', type: GenericoDto })
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: PerfilesModulosDto):Promise<GeneralInterface> {
        return this.perfilesModulosService.addDatos(dto);
    }
    @Delete(':id')
    @ApiParam({ name: 'id', description: 'ID', type: Number })
    @ApiResponse({ status: 200, description: 'Se elimina registro exitosamente', type: GenericoDto })
    destroy(@Param() params):Promise<GeneralInterface> {
        return this.perfilesModulosService.deleteDato(parseInt(params.id));
    }
}
