import { Routes } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';

export const LoginRoutes: Routes = [
  { path: 'login/forgotPassword', component: ForgotPasswordComponent },
  { path: 'login/register', component: RegisterComponent },
];
