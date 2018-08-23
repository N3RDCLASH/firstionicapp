import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { RegisterPage } from "../pages/register/register";
import { LoginPage } from "../pages/login/login";
import { LoggedinPage } from "../pages/loggedin/loggedin";
import { ForgotPasswordPage } from "../pages/forgot-password/forgot-password";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";

const firebaseAuth = {
  apiKey: "AIzaSyDUdPV5_oH8u1qhjySPUvDmjHLxPv11hOE",
  authDomain: "firstionicapp-29.firebaseapp.com",
  databaseURL: "https://firstionicapp-29.firebaseio.com",
  projectId: "firstionicapp-29",
  storageBucket: "firstionicapp-29.appspot.com",
  messagingSenderId: "104740449037"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    LoggedinPage,
    ForgotPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    LoggedinPage,
    ForgotPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
