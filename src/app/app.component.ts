import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { obtenerUsuarios } from './types/biblioteca/biblioteca.component'
import { Usuario, IndexComponent } from './types/index/index.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'JSONDATABASE';

}


