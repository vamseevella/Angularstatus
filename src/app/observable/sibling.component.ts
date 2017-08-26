import { Component, OnInit } from '@angular/core';
import { MissionService }     from './mission.service';

@Component({
  selector: 'app-sibling',
  template: `
        <span>{{message}}</span>
        <span style="padding-bottom: 50px"><button class="btn btn-primary" (click)="newMessage()"> New Message</button></span>
    `,
  // providers: [MissionService]
})

export class SibligComponent implements OnInit {

  message:string;
  constructor(private data: MissionService) { }
  ngOnInit() {
    this
      .data
      .currentMessage$
      .subscribe(message => {
        console.log('inside sibling SubScriber');
        this.message = message
      })
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }
}
