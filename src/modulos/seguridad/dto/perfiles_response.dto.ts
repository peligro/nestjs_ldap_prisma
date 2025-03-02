import { ApiProperty } from "@nestjs/swagger";


export class PerfilesResponseDto
{
    @ApiProperty({ example: 1, description: "ID de la respuesta" })
    id: number;
    
    @ApiProperty({ example: "Administrador", description: "Estado de la respuesta" })
    nombre: string; 

    @ApiProperty({ example: "Este perfil es para...", description: "Estado de la respuesta" })
    descripcion: string; 
}