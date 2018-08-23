import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { LoggedinPage } from "../loggedin/loggedin";
import { ForgotPasswordPage } from "../forgot-password/forgot-password";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  @ViewChild("email")
  email;
  @ViewChild("password")
  pw;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fire: AngularFireAuth,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  alert(message: string) {
    this.alertCtrl
      .create({
        title: "Info!",
        subTitle: message,
        buttons: ["OK"]
      })
      .present();
  }

  logIn() {
    this.fire.auth
      .signInWithEmailAndPassword(this.email.value, this.pw.value)
      .then(data => {
        console.log("got some data ", data);
        this.navCtrl.setRoot(LoggedinPage);
        this.alert("Succes! You are logged in!");
      })
      .catch(error => {
        this.alert(error.message);
        console.log("There was an error ", error);
      });
    console.log(this.email.value, this.pw.value);
  }

  forgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }
}
