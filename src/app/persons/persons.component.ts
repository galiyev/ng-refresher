import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from './persons.service';

@Component({
  selector:'app-persons',
  templateUrl:'./persons.component.html'

})
export class PersonsComponent implements OnInit {
    personList:string[];
    // prsService: PersonService;


   constructor(private prsService:PersonService){
        // this.prsService = prsService;
   }

   onRemovePerson(name:string){
      this.prsService.removePerson(name);
   }


   ngOnInit(): void {
        this.personList = this.prsService.persons;
   }
}
