import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class PersonService {
    persons:string[] = ['Azim', 'Kairat', 'Nurgul'];

    addPerson(name:string){
      this.persons.push(name);
    }

  }
