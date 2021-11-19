export class User{
    constructor(
        public id: string,
        public username: string,
        public password: string,
        public nombre: string,
        public apellido: string,
        public dni: string,
        public rolId:string
    ){}
}