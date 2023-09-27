import { Routes } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login.component';

export const LoginRoutes: Routes = [
  { path: 'login/forgotPassword', component: ForgotPasswordComponent },
  { path: 'login/register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];
