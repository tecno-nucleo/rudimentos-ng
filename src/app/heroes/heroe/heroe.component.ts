import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    nombre: string = "Kassad";
    edad: number = 0;

    get nombreMayusculas():string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string {
        return this.nombre + ' - ' + this.edad;
    }

    cambiarNombre():void {
        this.nombre = "Hohoho";
    }

    cambiarEdad():void {
        this.edad = 77;
    }
}