import { NavController } from 'ionic-angular';
import { Event } from './../../models/event';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { k } from "../../constants";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


/*
  Firebase Provider

  The main interface that connects to firebase and social media

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public http: Http, public db: AngularFireDatabase, public afAuth: AngularFireAuth, public navCtrl: NavController) {
    console.log('Hello FirebaseProvider Provider');
  }


  getUpcomingEvents() {
    this.db.list('/events')
  }

  register(eventId, user) {
    this.getEventDetails(eventId).then(function(event: Event) {
      if (event.eventType == k.PAID) {
        // proceed payment
      } else {
        //continue register
      }
    });
  }

  getEventDetails(eventId) {
    return Promise.resolve({ "eventName": "data", 'eventType': 0});
  }

  login(redirectTo) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    if (redirectTo) {
      this.navCtrl.push(redirectTo);
    } else {
      this.navCtrl.push(redirectTo);
    }
    
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
