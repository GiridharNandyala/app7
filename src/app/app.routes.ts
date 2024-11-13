import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Adjust the path as needed
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent } ,
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'services',component:ServicesComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},


    // This will set the home route to the HomeComponent
];
