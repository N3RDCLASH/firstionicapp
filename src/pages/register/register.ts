import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('email') email;
  @ViewChild('password') pw;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.email.value , this.pw.value)
    .then(data => {
      console.log('Got data ' , data);
    })
    .catch(error => {
      console.log('got an error ' , error);
    });
    
    console.log(this.email.value , this.pw.value);
  }

}
