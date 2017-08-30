import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
// import { StoreModule } from '@ngrx/store';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './routing';
import {ExampleService} from './service1/example.service';
import {HighlightDirective} from './my-sc-component/highlight.directive';
import {NameChildComponent}  from './my-sc-component/child.component';
import {CountdownLocalVarParentComponent}  from './voter/timer.parent.component';
import {CountdownTimerComponent}  from './voter/timer.component';

import {MyFtComponentComponent} from './my-ft-component/my-ft-component.component';
import {MyScComponentComponent} from './my-sc-component/my-sc-component.component';
import {PersonalComponent} from './personal/personal.component';
import {VoterComponent} from './voter/voter.component';
import {VoterChildComponent} from './voter/voter.child.component';
import {ObservableComponent} from './observable/observable.component';
import {AstronautComponent} from './observable/astronaut.component';
import {SibligComponent} from './observable/sibling.component';
import {MissionService}     from './observable/mission.service';
import {CalExponentPipe} from './pipe/calexponent.pipe';
import {PipeComponent} from './pipe/pipe.component';
import {searchComponent, SearchService} from './httpObservable/search.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
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
    VoterChildComponent,
    ObservableComponent,
    AstronautComponent,
    SibligComponent,
    CalExponentPipe,
    PipeComponent,
    searchComponent
  ],
  providers: [ExampleService, MissionService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
