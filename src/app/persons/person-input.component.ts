import { Component, OnInit  } from '@angular/core';
import { PersonService } from './persons.service';


@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls:['./person-input.component.css']
})

export class PersonInputComponent implements OnInit {

  constructor(private prsService:PersonService){

  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  enteredPersonName = '';

  onCreatePerson(){
    console.log('Created person '+this.enteredPersonName);
    this.prsService.addPerson(this.enteredPersonName);
    this.enteredPersonName='';
  }
}
