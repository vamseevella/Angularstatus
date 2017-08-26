import { Component, OnInit } from '@angular/core';
import { MissionService }     from './mission.service';

@Component({
  selector: 'mission-control',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
  providers: [MissionService]
})
export class ObservableComponent implements OnInit {

  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
    'Fly to mars!',
    'Fly to Vegas!'];
  nextMission = 0;
  // message : string;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  ngOnInit() {
    console.log('in on init of parent');
    // this.missionService.currentMessage$.subscribe(message => this.message = message)
    /*this
      .missionService
      .getMessgae()
      .subscribe((message) => {
        console.log('in on init of parent subscribe');
        this.message = message
      })*/
  }

  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    console.log('inside announce() ....');

    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

}
