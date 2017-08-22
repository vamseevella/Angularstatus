import { Http , Response } from '@angular/http';
import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
  private _producturl='assets/products.json';
  constructor(private _http: Http){}

  getproducts(): Observable<IProduct[]> {
    return this._http.get(this._producturl)
      .map((response: Response) => <IProduct[]> response.json())
      .do(data => {
          //console.log(data);
          /*for(var i in data){
              console.log(data[i]);
          }*/
      }).catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error());
  }
}
