import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty } from "class-validator"

export class PerfilesDto
{
    @ApiProperty({example: "Administrador", description: "Activo"})
    @IsNotEmpty({message:"El campo nombre es requerido"})
    nombre: string;

    @ApiProperty({example: "Este perfil es para...", description: "Activo"})
    @IsNotEmpty({message:"El campo descripcion es requerido"})
    descripcion: string;
}