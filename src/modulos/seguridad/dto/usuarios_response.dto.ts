import { ApiProperty } from "@nestjs/swagger";
import { EstadoResponseDto } from "./estado_response.dto";
import { PerfilesResponseDto } from "./perfiles_response.dto";

export class UsuariosResponseDto
{
    @ApiProperty({ example: 1, description: "ID de la respuesta" })
    id: number;
    
    @ApiProperty({example: "mail@mail.com", description: "E-Mail"})
    correo:string;
    
    @ApiProperty({example: {id:1, nombre:""}, description: "Estado"})
    estado:EstadoResponseDto;

    @ApiProperty({example: {id:1, nombre:"", descripcion:""}, description: "Perfil"})
    perfil:PerfilesResponseDto;
}