import {Component, Injectable} from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

class SearchItem {
  constructor(public track: string,
              public artist: string,
              public link: string,
              public thumbnail: string,
              public artistId: string) {
  }
}

@Injectable()
export class SearchService {
  apiRoot: string = 'https://itunes.apple.com/search';

  constructor(private http: Http) {
  }

  search(term: string): Observable<SearchItem[]> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiURL)
      .map(res => {
        return res.json().results.map(item => {
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
      });
  }
}

@Component({
  selector: 'searchApp',
  template: `
<div class="container">
    <div class="row">
      <div class="col-sm-6 col-sm-offset-3">
        <div class="jumbotron">
          <form class="form-inline">
            <div class="form-group" class="col-sm-offset-3">
              <input type="search"
                     class="form-control"
                     placeholder="Enter search string"
                     [formControl]="searchField">
            </div>
          </form>
          
          <div class="text-center">
            <p class="lead" *ngIf="loading">Loading...</p>
          </div>
          
          <ul class="list-group">
            <li class="list-group-item"
                *ngFor="let track of results | async">
              <img src="{{track.thumbnail}}">
              <a target="_blank"
                 href="{{track.link}}">{{ track.track }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
 </div>
 `
})
export class searchComponent {
  private loading: boolean = false;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  constructor(private itunes: SearchService) {
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do(_ => this.loading = true)
      .switchMap(term => this.itunes.search(term))
      .do(_ => this.loading = false)
  }

  /*doSearch(term: string) {
    this.itunes.search(term)
  }*/
}
