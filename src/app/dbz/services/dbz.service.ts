import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService{

    personajes: Personaje[] = [
        {
          nombre: 'Goku' ,
          Poder:30000
        },
        {
          nombre: 'Vegeta' ,
          Poder: 24000
        }
      ];
    constructor(){
        console.log('Servicio inicializado');
    }
}