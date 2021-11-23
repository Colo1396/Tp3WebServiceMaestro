import { CuentaBancaria } from './cuentaBancaria';
import { Rol } from './rol';

export interface User{
    id: number;
    username: string;
    nombre?: string;
    apellido?: string;
    dni?: number;
    password?: string;
    telefono?: string;
    auth_token?: string;
    billetera?: number;
    cuentasBancarias?: CuentaBancaria[];
    rol?: Rol;
    rolId?: number;
}