import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { PerfilesModulosService } from '../../servicios/perfiles_modulos/perfiles_modulos.service';
import { PerfilesModulosDto } from '../../dto/perfiles_modulos.dto';
import { GeneralInterface } from 'src/interfaces/general-interface.interface';
import { PerfilesModulosInterface } from 'src/interfaces/perfiles_modulos.interface';

@Controller('perfiles-modulos')
export class PerfilesModulosController {
    constructor(private perfilesModulosService: PerfilesModulosService) { }


    @Get(':id')
    @HttpCode(HttpStatus.OK)
    datos_por_perfil(@Param() params):Promise<PerfilesModulosInterface[]> {
        return this.perfilesModulosService.getDatosPorPerfil(parseInt(params.id));
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: PerfilesModulosDto):Promise<GeneralInterface> {
        return this.perfilesModulosService.addDatos(dto);
    }
    @Delete(':id')
    destroy(@Param() params):Promise<GeneralInterface> {
        return this.perfilesModulosService.deleteDato(parseInt(params.id));
    }
}
