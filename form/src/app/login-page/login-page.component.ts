import { Component, OnInit } from '@angular/core';
import {GoogleSignInSuccess} from 'angular-google-signin';
import { DataService } from "../data.service";
import { ServerService }       from '../server.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  message: string = '';
  constructor(
    private serverService: ServerService,
    private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.changeMessage(this.message);
  }

  private myClientId: string = '726620124773-ldsc11opkl7c0fsi3b5gnjum03jdsjmd.apps.googleusercontent.com';

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let id: string = googleUser.getId();
    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    console.log('ID: ' +
      profile
        .getId()); // Do not send to your backend! Use an ID token instead.
    //this.message = profile.getEmail();
    //this.data.changeMessage(this.message);
    console.log('Name: ' + profile.getName());


    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    this.serverService.token(profile.getEmail(), profile.getName())
    .subscribe (
      (res) => {console.log(res.json()[0].uid);
                this.message = res.json()[0].uid;
                this.data.changeMessage(this.message);
              }
    );

  }
signIn() {
    this.data.changeMessage(this.message);
}
signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    this.message = 'Login';
    this.data.changeMessage(this.message);
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
}
