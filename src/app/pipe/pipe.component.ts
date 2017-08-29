import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit, OnDestroy {
  power = 5;
  factor = 1;

  message$: Observable<string>;
  // message$: Subscription;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() {  }

  ngOnInit() {
    this.resend();
  }

  resend() {
    this.message$ = Observable.interval(900)
      .map(i => this.messages[i])
      .take(this.messages.length);

    // this.message$ = Observable.interval(1000).subscribe(console.log);
  }

  ngOnDestroy() {
    // this.message$.unsubscribe();
  }
}
