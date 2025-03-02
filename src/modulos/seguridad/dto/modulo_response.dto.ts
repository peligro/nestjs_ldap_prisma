import { ApiProperty } from "@nestjs/swagger";


export class ModuloResponseDto
{
    @ApiProperty({ example: 1, description: "ID de la respuesta" })
    id: number;
    
    @ApiProperty({ example: "Administración", description: "Estado de la respuesta" })
    nombre: string; 
}