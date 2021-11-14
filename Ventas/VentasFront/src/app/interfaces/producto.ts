import { MedioDePago } from "./medioDePago";

export interface Producto{
    id: number;
    nombre: string;
    descripcion: string;
    imagen?: string;
    precio: number;
    stock: number;
    mediosDePago: Array<MedioDePago>;
    cantidadVentas: number;
}