import { ApiProperty } from "@nestjs/swagger";
export interface LdapInterface 
{
    
    estado:string;
    mensaje:string;
    cn: string;
    mail: string;
    givenName: string;
    sn: string;
    userAccountControl: string;
}