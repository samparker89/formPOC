import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormEntry }           from './formentry';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class FormService {

  constructor (private http: Http) {}

  private formsUrl = 'app/formdetails.json';  // URL to web API

  getFormEntries (): Observable<FormEntry[]> {
    return this.http.get(this.formsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.property || { };
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
