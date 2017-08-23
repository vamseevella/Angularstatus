import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-my-sc-component',
  templateUrl: './my-sc-component.component.html',
  styleUrls: ['./my-sc-component.component.css']
})
export class MyScComponentComponent implements OnInit {
  // currentPath: boolean;
  color: string;
  // constructor( private router: Router ) { }

  // Displays 'Mr. IQ', '<no name set>', 'Bombasto'
  names = ['Mr. IQ', '   ', '  Bombasto  '];

  ngOnInit() {
    /*this.currentPath = !(this.router.url=="/fComponent/sComponent");
    console.log( this.currentPath );*/
  }

}
