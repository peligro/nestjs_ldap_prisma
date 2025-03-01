import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ModuloDto } from '../../dto/modulo.dto';
@Injectable()
export class ModulosService {
    private prisma: any;
    constructor() {
        this.prisma = new PrismaClient();
    }
    async getDatos() {
        return await this.prisma.modulo.findMany(
            {
                orderBy: [{ id: 'desc' }]
            });
    }
    async getDato(id: any) {
        let datos = await this.prisma.modulo.findFirst(
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

    async addDatos(dto: ModuloDto) {
        let existe = await this.prisma.modulo.findFirst(
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
        await this.prisma.modulo.create(
            {
                data:
                {
                    nombre: dto.nombre
                }
            });
        return { estado: 'ok', mensaje: 'Se crea el registro exitosamente' }
    }
    async updateDatos(id: any, dto: ModuloDto) {
        let datos = await this.prisma.modulo.findFirst(
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
        await this.prisma.modulo.update(
            {
                where:
                {
                    id: id
                },
                data:
                {
                    nombre: dto.nombre
                }
            });
        return { estado: 'ok', mensaje: 'Se modifica el registro exitosamente' }
    }

    async deleteDato(id: any) {
        return { estado: 'ok', mensaje: 'Se elimina el registro exitosamente' }
    }
}
