import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {RegistrationComponent} from "./registration/registration.component";


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
  // {
  //   path:'',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // }
  // {
  //   path: '**',
  //   component: NotFo
  // }
];
