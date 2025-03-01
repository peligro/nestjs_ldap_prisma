import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PerfilesDto } from '../../dto/perfiles.dto.';

@Injectable()
export class PerfilesService {
    private prisma: any;
    constructor() {
        this.prisma = new PrismaClient();
    }
    async getDatos() {
        return await this.prisma.perfil.findMany(
            {
                orderBy: [{ id: 'desc' }]
            });
    }
    async getDato(id: any) {
        let datos = await this.prisma.perfil.findFirst(
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
                    error: "El registro no existe en el sistema"//Ocurrió un error inesperado                    
                }, HttpStatus.BAD_REQUEST,
                {
                    cause:
                    {
                        name: "",
                        message: ""
                    }
                }
            );
        } else {
            return datos;
        }
    }

    async addDatos(dto: PerfilesDto) {
        let existe = await this.prisma.perfil.findFirst(
            {
                where:
                {
                    nombre: dto.nombre
                }
            });
        if (existe) {
            throw new HttpException(
                {
                    estado: HttpStatus.BAD_REQUEST,
                    mensaje: `El registro ${dto.nombre} ya existe en el sistema`
                }, HttpStatus.BAD_REQUEST, {
                cause: { name: "", message: "" }
            });
        }
        await this.prisma.perfil.create(
            {
                data:
                {
                    nombre: dto.nombre,
                    descripcion: dto.descripcion
                }
            });
        return { estado: 'ok', mensaje: 'Se crea el registro exitosamente' }
    }
    async updateDatos(id: any, dto: PerfilesDto) {
        let datos = await this.prisma.perfil.findFirst(
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
                    error: "El registro no existe en el sistema"//Ocurrió un error inesperado                    
                }, HttpStatus.BAD_REQUEST,
                {
                    cause:
                    {
                        name: "",
                        message: ""
                    }
                }
            );
        }
        await this.prisma.perfil.update(
            {
                where:
                {
                    id: id
                },
                data:
                {
                    nombre: dto.nombre,
                    descripcion: dto.descripcion
                }
            });
        return { estado: 'ok', mensaje: 'Se modifica el registro exitosamente' }
    }

    async deleteDato(id: any) {
        return { estado: 'ok', mensaje: 'Se elimina el registro exitosamente' }
    }
}
