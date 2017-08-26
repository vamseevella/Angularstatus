import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';

@Injectable()
export class MissionService {

  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  // for siblig communication
  private messageSource: BehaviorSubject<string> = new BehaviorSubject<string>("defoult Message");

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  currentMessage$ = this.messageSource.asObservable();

  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
    console.log('inside announceMission() ....');
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
