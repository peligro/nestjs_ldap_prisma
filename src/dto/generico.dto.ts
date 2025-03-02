import { ApiProperty } from "@nestjs/swagger";


export class GenericoDto
{
    @ApiProperty({example: "estado", description: "OK"})
    estado: string;

    @ApiProperty({example: "mensaje", description: "Se crea registro exitosamente"})
    mensaje: string;
}