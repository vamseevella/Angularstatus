import { Injectable } from '@angular/core';

@Injectable()

export class ExampleService {
  public str : string;

  setMethod ( res ) {
    this.str ='hi '+res ;
  }

  getMethod () {
    return this.str;
  }

  someMethod () {
    return 'App this is my first service!';
  }

}
