import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import {Car} from './car';
    
@Injectable()
export class CarService {
    
    constructor(private http: Http) {}

    getCarsSmall():Observable<Car[]> {
    	// console.log(this.http.get('http://54.68.10.166:1337/Car'))
            return this.http.get('http://54.68.10.166:1337/Car')
                    .map(this.extractData)
                    .catch(this.handleError);// return [];


         // this.http.get('http://54.68.10.166:1337/Car')
         // .map(this.extractData)
                   // .toPromise()
                    // .then(res => <Car[]> res.json().data)
                   // .then(data => { return data; });
    }

  // getHeroesList (): Observable<Hero[]> {
  //   return this.http.get(this.heroesUrl)
  //                   .map(this.extractData)
  //                   .catch(this.handleError);
  // }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }


  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
