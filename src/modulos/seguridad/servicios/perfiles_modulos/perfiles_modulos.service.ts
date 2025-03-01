import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PerfilesModulosDto } from '../../dto/perfiles_modulos.dto';

@Injectable()
export class PerfilesModulosService {
    private prisma: any;
    constructor() {
        this.prisma = new PrismaClient();
    }
    async getDatosPorPerfil(perfil_id: number) {
        return await this.prisma.perfil_modulo.findMany(
            {
                where: {
                    perfil_id: perfil_id
                }
            });
    }
    async addDatos(dto: PerfilesModulosDto) {
        await this.validacionesPerfilesModulos(dto);
        let perfil = await this.prisma.perfil_modulo.findFirst(
            {
                where:
                {
                    perfil_id: dto.perfil_id,
                    modulo_id: dto.modulo_id
                }
            });
        if (perfil) {
            throw new HttpException(
                {
                    estado: HttpStatus.BAD_REQUEST,
                    mensaje: 'Ocurrió un error inesperado'
                }, HttpStatus.BAD_REQUEST, {
                cause: { name: "", message: "" }
            });
        }
        await this.prisma.perfil_modulo.create(
            {
                data:
                {
                    perfil_id: dto.perfil_id,
                    modulo_id: dto.modulo_id
                }
            });
        return { estado: 'ok', mensaje: 'Se crea el registro exitosamente' }
    }
    async deleteDato(id: number) {
        let datos = await this.prisma.perfil_modulo.findFirst(
            {
                where:
                {
                    id: id
                }
            });
        if (!datos) {
            throw new HttpException(
                {
                    estado: HttpStatus.BAD_REQUEST,
                    mensaje: 'Ocurrió un error inesperado'
                }, HttpStatus.BAD_REQUEST, {
                cause: { name: "", message: "" }
            });
        }
        await this.prisma.perfil_modulo.delete(
            {
                where:
                {
                    id:id
                }
            });
        return {estado: 'ok', mensaje:'Se elimina el registro exitosamente'}
    }
    //*************VALIDACIONES */

    async validacionesPerfilesModulos(dto: PerfilesModulosDto) {
        let perfil = await this.prisma.perfil.findFirst(
            {
                where:
                {
                    id: dto.perfil_id
                }
            });
        let modulo = await this.prisma.estado.findFirst(
            {
                where:
                {
                    id: dto.modulo_id
                }
            });
        if (!modulo || !perfil) {
            throw new HttpException(
                {
                    estado: HttpStatus.BAD_REQUEST,
                    mensaje: 'Ocurrió un error inesperado'
                }, HttpStatus.BAD_REQUEST, {
                cause: { name: "", message: "" }
            });
        }
    }
}
