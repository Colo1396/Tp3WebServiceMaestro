export class Producto{
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public imagen: string,
        public precio: number,
        public stock: string,
        public formaDePago: string,
        public idUser: any,
        public idCategoria: any
    ){}
}