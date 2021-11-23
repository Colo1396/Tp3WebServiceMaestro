export class Domicilio{
    constructor(
        public id: string,
        public provincia: string,
        public localidad: string,
        public calle: string,
        public numero: string,
        public pisoDepto: string,
        public idUser: any
    ){}
}