import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku' ,
          Poder:30000
        },
        {
          nombre: 'Vegeta' ,
          Poder: 24000
        }
      ];

    get Personaje(): Personaje[]{
        return [...this._personajes];
    }

    constructor(){
    }

    agregarPersonaje(datosPersonaje : Personaje){

        this._personajes.push( datosPersonaje );

    }
}