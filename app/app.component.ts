import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  firstMediaItem = {
    id: 1,
    name: 'El Hobbit',
    medium: 'Peliculas',
    category: 'Fantasy',
    year: 2013,
    watchedOn: 1294166565384,
    isFavorite: false
  }

  borrarPelicula(mediaItem) {
    console.log('Borro el item');
    console.log(mediaItem)
  }
}
