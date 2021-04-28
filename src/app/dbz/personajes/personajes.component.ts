import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {

//@Input('data') personajes: Personaje[] = [];

  get personajes(){
    return this.DbzService.Personaje;
  }

  constructor( private DbzService : DbzService){

  }
}
