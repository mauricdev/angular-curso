import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {
  
get personajes(): Personaje[]{
 return this.DbzService.personajes;
}

  nuevo:Personaje = {
    nombre: 'Maestro Rochi' ,
    Poder: 1000
  }

  agregarNuevoPersonaje( argumento: Personaje){
    this.personajes.push( argumento);
  }

  constructor( private DbzService: DbzService ){ }
}
