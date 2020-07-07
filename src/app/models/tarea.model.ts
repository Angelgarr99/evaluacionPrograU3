export class Tarea{
    nombre: string;
    realizada: boolean;
    index: number;
    deabilitar: string;

    constructor(
        nombre: string, index: number
    ){

        this.nombre = nombre;
        this.realizada = false;
        this.index = index;
        this.deabilitar = null;
    }
}
