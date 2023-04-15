import { Component } from '@angular/core';
import {routes} from "./routes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecobox';
  showHeader = true;
  isRegistrationPage = false;
  isLoginPage = false;
  constructor(private router: Router){}

  onRegisterClicked() {
    // скрыть хедер
    this.showHeader = false;
    // перейти на страницу регистрации
    this.router.navigate(['/registration']);
    this.isRegistrationPage = true;
  }

  onLoginClicked() {
    // скрыть хедер
    this.showHeader = false;
    // перейти на страницу регистрации
    this.router.navigate(['/login']);
    this.isRegistrationPage = true;
  }
}
