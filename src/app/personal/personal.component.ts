import { Component, OnInit } from '@angular/core';
import { ExampleService } from './../service1/example.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
  })

export class PersonalComponent implements OnInit {

  constructor( public _exampleService: ExampleService ) { }
  msg: string;

  ngOnInit() {
    this.msg = this._exampleService.getMethod();
    console.log(this.msg);
  }

  // Here we are implementing the submitForm function. All we are doing for right now is spitting out the details of the form to our console.
  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }
}
