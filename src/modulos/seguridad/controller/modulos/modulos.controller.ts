import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ModulosService } from '../../servicios/modulos/modulos.service';
import { ModuloDto } from '../../dto/modulo.dto';
import { ModulosInterface } from 'src/interfaces/modulos.interface';
import { GeneralInterface } from 'src/interfaces/general-interface.interface';
import { ApiTags } from '@nestjs/swagger';

@Controller('modulos')
@ApiTags("Seguridad/Módulos")
export class ModulosController {
    constructor(private modulosService: ModulosService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    index():Promise<ModulosInterface[]>  {
        return this.modulosService.getDatos();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    show(@Param() params):Promise<ModulosInterface> {
        return this.modulosService.getDato(parseInt(params.id));
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: ModuloDto)  {
        return this.modulosService.addDatos(dto);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param() params, @Body() dto: ModuloDto):Promise<GeneralInterface> {
        return this.modulosService.updateDatos(parseInt(params.id), dto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    destroy(@Param() params):Promise<GeneralInterface> {
        return this.modulosService.deleteDato(parseInt(params.id));
    }
}
