import { Component, OnInit } from '@angular/core';
import { ExampleService } from './../service1/example.service';

@Component({
  selector: 'app-my-ft-component',
  templateUrl: './my-ft-component.component.html',
  styleUrls: ['./my-ft-component.component.css']
})
export class MyFtComponentComponent implements OnInit {
  public name: string ='vamsee';
  title: string;
  msg: string;
  currentPath: boolean = true;

  constructor( public _exampleService: ExampleService ) { }

  ngOnInit() {
    this.title = this._exampleService.someMethod();
    this.msg = this._exampleService.getMethod();
    console.log(this.msg);
  }

  testMethod() {
    return true;
  }

  onClick() {
    this.currentPath = false;
    console.log(this.currentPath);
  }
}
