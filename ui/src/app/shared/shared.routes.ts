import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorNotFoundComponent } from './errors/error-not-found/error-not-found.component';

export const SHARED_ROUTE: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '404', component: ErrorNotFoundComponent }
];
