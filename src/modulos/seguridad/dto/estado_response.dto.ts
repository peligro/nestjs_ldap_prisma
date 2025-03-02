import { ApiProperty } from "@nestjs/swagger";


export class EstadoResponseDto
{
    @ApiProperty({ example: 1, description: "ID de la respuesta" })
    id: number;
    
    @ApiProperty({ example: "Activo", description: "Estado de la respuesta" })
    nombre: string; 
}