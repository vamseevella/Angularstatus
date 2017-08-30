import {Component} from '@angular/core';
import {ExampleService} from './service1/example.service';
import {IProduct} from './product';
import {ProductService} from './products.service';
import {Router}  from '@angular/router';
import {MissionService}     from './observable/mission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  // title = 'app';
  title: string;
  iproducts: IProduct[];
  holdSub$;
  abc: number|string = 1;

  constructor(public _exampleService: ExampleService, private _product: ProductService, private router: Router,) {
    //private _exampleService : ExampleService;
  }

  doSomeThing(term: number): void {
    console.log(term);
    //location.href = 'http://localhost:4200/sComponent';
    //this.router.navigate(['/sComponent']);
  }

  ngOnInit(): void {

    this.title = this._exampleService.someMethod();
    this._exampleService.setMethod('calling from appComponent setMethod()');
    this.holdSub$ = this._product.getproducts()
      .subscribe(iproducts => {
        this.iproducts = iproducts;
        console.log(this.iproducts);
      });
    console.log("typeof abc =" + typeof this.abc);
  }

  ngOnDestroy() {

    if (this.holdSub$) {
      this.holdSub$.unsubscribe();
    }

  }
}
