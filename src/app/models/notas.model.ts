export class Nota{

    titulo: string;
    descripcion: string;
    fecCre: Date;
    importancia: string;

    constructor(titulo: string, descripcion: string, importancia: string){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.importancia = importancia;
        this.fecCre = new Date();
    }
}

