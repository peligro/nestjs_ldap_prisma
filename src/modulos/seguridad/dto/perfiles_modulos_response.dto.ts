import { ApiProperty } from "@nestjs/swagger";

export class PerfilesModulosResponseDto
{
    @ApiProperty({ example: 1, description: "ID de la respuesta" })
    id: number;

    @ApiProperty({ example: 1, description: "ID de la respuesta" })
    modulo_id:number;
    @ApiProperty({ example: 1, description: "ID de la respuesta" })
    perfil_id:number;
}