export class Compra{
    constructor(
        public id: string,
        public idVendedor: string,
        public idComprador: string,
        public idCarrito: string,
        public idMedioDePago: string,
        public idDestino: string,
        public carrito: any,
    ){}
}