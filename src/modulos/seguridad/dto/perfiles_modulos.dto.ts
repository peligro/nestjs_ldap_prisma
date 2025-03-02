import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator"

export class PerfilesModulosDto
{
    @ApiProperty({example: 1, description: "perfil_id"})
    @IsNumber({}, {message:"El campo perfil_id es requerido"})
    perfil_id:number;

    @ApiProperty({example: 1, description: "modulo_id"})
    @IsNumber({}, {message:"El campo modulo_id es requerido"})
    modulo_id:number;
}