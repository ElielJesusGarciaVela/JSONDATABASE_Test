import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}

export interface Usuario {
    id_usuario: number;
    nombre: string;
    email: string;
    fecha_registro: string;
}

export interface Prestamo {
    id_prestamo: number;
    id_usuario: number;
    libro: string;
    fecha_prestamo: string;
    fecha_devolucion: string;
    devuelto: boolean;
}
