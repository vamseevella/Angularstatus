/**
 * Created by vamseekumar on 08/08/17.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MyFtComponentComponent} from './my-ft-component/my-ft-component.component';
import {MyScComponentComponent} from './my-sc-component/my-sc-component.component';
import { PersonalComponent } from './personal/personal.component';
import { VoterComponent } from './voter/voter.component';
import { CountdownLocalVarParentComponent } from './voter/timer.parent.component';


// import { AppComponent }   from './app.component';
/*import { HeroesComponent }      from './heroes.component';
 import { HeroDetailComponent }  from './hero-detail.component';*/

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'fComponent', component: MyFtComponentComponent,
    children: [
      { path: 'sComponent', component: MyScComponentComponent },
    ]
  },
  // { path: 'sComponent', component: MyScComponentComponent },
  { path: 'pComponent', component: PersonalComponent  },
  { path: 'voterComponent', component: VoterComponent  },
  { path: 'timerComponent', component: CountdownLocalVarParentComponent  },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
