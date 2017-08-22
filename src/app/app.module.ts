import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing';
import { ExampleService } from './service1/example.service';
import { MyFtComponentComponent } from './my-ft-component/my-ft-component.component';
import { MyScComponentComponent } from './my-sc-component/my-sc-component.component';
import { PersonalComponent } from './personal/personal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MyFtComponentComponent,
    MyScComponentComponent,
    PersonalComponent
  ],
  providers: [ ExampleService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
