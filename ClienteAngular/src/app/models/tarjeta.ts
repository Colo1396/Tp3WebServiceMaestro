export class Tarjeta{
    constructor(
        public _id: string,
        public tipo: string,
        public numero: string,
        public nombreTitular: string,
        public dniTitular: string,
        public fechaVenc: string,
        public codSeguridad: string,
        public idUser: any
    ){}
}