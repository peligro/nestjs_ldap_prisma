import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { PerfilesService } from '../../servicios/perfiles/perfiles.service';
import { PerfilesDto } from '../../dto/perfiles.dto.';
import { PerfilesInterface } from 'src/interfaces/perfiles.interface';
import { GeneralInterface } from 'src/interfaces/general-interface.interface';
import { ApiTags } from '@nestjs/swagger';

@Controller('perfiles')
@ApiTags("Seguridad/Perfiles")
export class PerfilesController {
    constructor(private perfilesService: PerfilesService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    index():Promise<PerfilesInterface[]> {
        return this.perfilesService.getDatos();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    show(@Param() params):Promise<PerfilesInterface> {
        return this.perfilesService.getDato(parseInt(params.id));
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: PerfilesDto):Promise<GeneralInterface> {
        return this.perfilesService.addDatos(dto);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param() params, @Body() dto: PerfilesDto):Promise<GeneralInterface> {
        return this.perfilesService.updateDatos(parseInt(params.id), dto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    destroy(@Param() params):Promise<GeneralInterface> {
        return this.perfilesService.deleteDato(parseInt(params.id));
    }
}
