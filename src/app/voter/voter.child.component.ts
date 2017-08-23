import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-voter',
  template: `
    <h4>{{name}}</h4>
    <button type="button" class="btn btn-primary" (click)="vote(true)"  [disabled]="voted">Agree</button>
    <button type="button" class="btn btn-success" (click)="vote(false)" [disabled]="voted">Disagree</button>
  `
})
export class VoterChildComponent {
  @Input()  name: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;

  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }
}
