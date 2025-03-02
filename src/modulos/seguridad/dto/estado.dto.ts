import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty } from "class-validator"

export class EstadoDto
{
    @ApiProperty({example: "nombre", description: "Activo"})
    @IsNotEmpty({message:"El campo nombre es requerido"})
    nombre: string;
}