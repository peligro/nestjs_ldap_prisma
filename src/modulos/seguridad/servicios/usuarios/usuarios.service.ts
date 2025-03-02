import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UsuariosDto } from '../../dto/usuarios.dto';

@Injectable()
export class UsuariosService {
    private prisma: any;
    constructor() {
        this.prisma = new PrismaClient();
    }
    async getDatos() {
        return await this.prisma.usuario.findMany(
            {
                orderBy: [{ id: 'desc' }],
                select: {
                    id: true,
                    correo: true,
                    estado: true,
                    perfil: true
                }
            });
    }
    async getDato(id: any) {
        let datos = await this.prisma.usuario.findFirst(
            {
                where:
                {
                    id: id
                },select: {
                    id: true,
                    correo: true,
                    estado: true,
                    perfil: true
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

    async addDatos(dto: UsuariosDto) {
        await this.validacionesUsuario(dto);
        let existe = await this.prisma.usuario.findFirst(
            {
                where:
                {
                    correo: dto.correo
                }
            });
        if (existe) {
            throw new HttpException(
                {
                    estado: HttpStatus.BAD_REQUEST,
                    mensaje: `El registro ${dto.correo} ya existe en el sistema`
                }, HttpStatus.BAD_REQUEST, {
                cause: { name: "", message: "" }
            });
        }
        await this.prisma.usuario.create(
            {
                data:
                {
                    correo: dto.correo,
                    estado_id: dto.estado_id,
                    perfil_id: dto.perfil_id
                }
            });
        return { estado: 'ok', mensaje: 'Se crea el registro exitosamente' }
    }
    async updateDatos(id: any, dto: UsuariosDto) {
        await this.validacionesUsuario(dto);
        let datos = await this.prisma.usuario.findFirst(
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
        await this.prisma.usuario.update(
            {
                where:
                {
                    id: id
                },
                data:
                {
                    correo: dto.correo,
                    estado_id: dto.estado_id,
                    perfil_id: dto.perfil_id
                }
            });
        return { estado: 'ok', mensaje: 'Se modifica el registro exitosamente' }
    }

    async deleteDato(id: any) {
        return { estado: 'ok', mensaje: 'Se elimina el registro exitosamente' }
    }
    //*************VALIDACIONES */

    async validacionesUsuario(dto: UsuariosDto) {
        let perfil = await this.prisma.perfil.findFirst(
            {
                where:
                {
                    id: dto.perfil_id
                }
            });
        let estado = await this.prisma.estado.findFirst(
            {
                where:
                {
                    id: dto.estado_id
                }
            });
        if (!estado || !perfil) {
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
