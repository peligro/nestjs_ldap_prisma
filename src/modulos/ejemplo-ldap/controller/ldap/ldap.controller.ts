import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ConexionLdapService } from '../../servicios/conexion-ldap/conexion-ldap.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LdapDto } from '../../dto/ldap.dto';
import { LdapInterface } from 'src/interfaces/ldap.interface';
import { LdapResponseDto } from '../../dto/ldap_response.dto';
@Controller('ldap')
@ApiTags("LDAP")
export class LdapController {
  constructor(private readonly conexionLdapService: ConexionLdapService) { }

  @Post()
  @ApiResponse({ status: 200, description: 'Autenticación exitosa', type: LdapResponseDto })
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: LdapDto): Promise<LdapInterface> {
    const { username, password } = body;
    try {
      const result = await this.conexionLdapService.authenticate(username, password);
      return { estado: "ok", mensaje: "Autenticación exitosa", cn: result.cn, mail: result.mail, givenName: result.givenName, sn: result.sn, userAccountControl: result.userAccountControl };
    } catch (error) {
      throw new HttpException(
        {
          estado: HttpStatus.BAD_REQUEST,
          error: "El registro no existe en el sistema"//Ocurrió un error inesperado                    
        }, HttpStatus.BAD_REQUEST,
        {
          cause:
          {
            name: "",
            message: ""
          }
        }
      );
      //return { estado:"ok", mensaje: error, cn: "", mail: "", givenName: "", sn: "", userAccountControl: "" };
    }
  }


}
