import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire:AngularFireAuth, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message:string){
    this.alertCtrl.create({
      title:"Info!",
      subTitle:message,
      buttons:["OK"]
    }).present();
  }

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.email.value , this.pw.value)
    .then(data => {
      this.alert("Registered!");
      console.log('Got data ' , data);
    })
    .catch(error => {
      this.alert(error.message);
      console.log('got an error ' , error);
    });
    
    console.log(this.email.value , this.pw.value);
  }

}
