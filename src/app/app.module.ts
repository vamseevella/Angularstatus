import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
// import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing';
import { ExampleService } from './service1/example.service';
import { HighlightDirective } from './my-sc-component/highlight.directive';
import { NameChildComponent }  from './my-sc-component/child.component';
import { CountdownLocalVarParentComponent }  from './voter/timer.parent.component';
import { CountdownTimerComponent }  from './voter/timer.component';

import { MyFtComponentComponent } from './my-ft-component/my-ft-component.component';
import { MyScComponentComponent } from './my-sc-component/my-sc-component.component';
import { PersonalComponent } from './personal/personal.component';
import { VoterComponent } from './voter/voter.component';
import { VoterChildComponent } from './voter/voter.child.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    // StoreModule.provideStore({todos}),
  ],
  declarations: [
    AppComponent,
    CountdownLocalVarParentComponent,
    CountdownTimerComponent,
    HighlightDirective,
    MyFtComponentComponent,
    MyScComponentComponent,
    PersonalComponent,
    NameChildComponent,
    VoterComponent,
    VoterChildComponent
  ],
  providers: [ ExampleService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
