import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { k } from "../../constants";


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public http: Http,public db: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }


  getUpcomingEvents() {
    this.db.list('/events')
  }

  register(eventId, user) {
    this.getEventDetails(eventId).then(function(event) {
      if (event.eventType = k.PAID) {
        // proceed payment
      } else {
        //continue register
      }
    }
  }

  getEventDetails(eventId) {
    return Promise.resolve({ "test": "data"});
  }

  login() {

  }

}
