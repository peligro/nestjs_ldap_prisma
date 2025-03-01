import { IsNumber } from "class-validator"

export class PerfilesModulosDto
{
    @IsNumber({}, {message:"El campo modulo_id es requerido"})
    modulo_id:number;

    @IsNumber({}, {message:"El campo perfil_id es requerido"})
    perfil_id:number;
}