import { Component, OnInit } from '@angular/core';

@Component({
  /*selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']*/

  selector: 'vote-taker',
  template: `
    <div style="text-align:center; margin-top: 40px;padding-bottom: 50px;">
      <h2>Should mankind colonize the Universe?</h2>
      <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
      <my-voter *ngFor="let voter of voters"
        [name]="voter"
        (onVoted)="onVoted($event)">
      </my-voter>
    </div>
  `
})
export class VoterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
