import { ApiProperty } from "@nestjs/swagger";

export class LdapResponseDto {
    @ApiProperty({ example: "ok", description: "Estado de la respuesta" })
    estado: string;

    @ApiProperty({ example: "Consulta exitosa", description: "Mensaje de respuesta" })
    mensaje: string;

    @ApiProperty({ example: "John Doe", description: "Common Name (CN) del usuario" })
    cn: string;

    @ApiProperty({ example: "john.doe@example.com", description: "Correo electrónico del usuario" })
    mail: string;

    @ApiProperty({ example: "John", description: "Nombre del usuario" })
    givenName: string;

    @ApiProperty({ example: "Doe", description: "Apellido del usuario" })
    sn: string;

    @ApiProperty({ example: 111, description: "Estado de la cuenta del usuario en Active Directory" })
    userAccountControl: number;
}