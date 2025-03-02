import { ApiProperty } from "@nestjs/swagger";
import {  IsEmail, IsNotEmpty, IsNumber } from "class-validator"

export class UsuariosDto
{
    @ApiProperty({example: "mail@mail.com", description: "E-Mail"})
    @IsNotEmpty({message:"El campo correo es requerido"})
    @IsEmail({}, {message:"El correo ingresado no es válido"})
    correo:string;
    
    @ApiProperty({example: 1, description: "Estado"})
    @IsNumber({}, {message:"El campo estado_id es requerido"})
    estado_id:number;

    @ApiProperty({example: 1, description: "Perfil"})
    @IsNumber({}, {message:"El campo perfil_id es requerido"})
    perfil_id:number;
}