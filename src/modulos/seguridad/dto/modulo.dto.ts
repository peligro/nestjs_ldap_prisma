import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty } from "class-validator"

export class ModuloDto
{
    @ApiProperty({example: "Administración", description: "Administración"})
    @IsNotEmpty({message:"El campo nombre es requerido"})
    nombre: string;
}