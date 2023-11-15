import { Component } from '@angular/core';
import { Foto } from '../models/fotos.model';

@Component({
  selector: 'app-lista-fotos',
  templateUrl: './lista-fotos.component.html',
  styleUrls: ['./lista-fotos.component.css']
})
export class ListaFotosComponent {

  fotos: Foto[] = [
    {titulo: "Titulo 1", imagen: "https://picsum.photos/200/300", descripcion: "Descripcion foto", fecha: new Date()},
    {titulo: "Titulo 2", imagen: "https://picsum.photos/300/200", descripcion: "Descripcion foto", fecha: new Date(), precio: 9000},
    {titulo: "Titulo 3", imagen: "https://picsum.photos/200/400", descripcion: "Descripcion foto", fecha: new Date()},
    {titulo: "Titulo 4", imagen: "https://picsum.photos/400/300", descripcion: "Descripcion foto", fecha: new Date(), precio: 8748659.54},
    {titulo: "Titulo 5", imagen: "https://picsum.photos/400/200", descripcion: "Descripcion foto", fecha: new Date()},
    {titulo: "Titulo 6", imagen: "https://picsum.photos/100/100", descripcion: "Descripcion foto", fecha: new Date()},
  ];

  cambiarfoto(foto: Foto){
    console.log(foto)
    foto.imagen = "https://picsum.photos/600/600"
  }

  ocultarfoto(foto: Foto){
    console.log("Clikado")
  }

}