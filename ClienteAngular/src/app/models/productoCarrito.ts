export class ProductoCarrito{
    constructor(
        public _id: string,
        public cantidad: number,
        public idProducto: any,
        public idCarrito: any,
        //AGREGO PARA USAR EN EL CARRITO SHOW
        public producto:any
        //public carrito:any
    ){}
}