import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LdapDto
{
    @ApiProperty({example: "username", description: "Usuario LDAP"})
    @IsNotEmpty({message:"El campo username es requerido"})
    username: string;
    @ApiProperty({example: "123456", description: "Contraseña LDAP"})
    @IsNotEmpty({message:"El campo password es requerido"})
    password: string;
}