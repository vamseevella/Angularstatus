import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-my-sc-component',
  templateUrl: './my-sc-component.component.html',
  styleUrls: ['./my-sc-component.component.css']
})
export class MyScComponentComponent implements OnInit {
  currentPath: boolean;
  constructor( private router: Router ) { }

  ngOnInit() {
    this.currentPath = !(this.router.url=="/fComponent/sComponent");
    console.log( this.currentPath );
  }

}
