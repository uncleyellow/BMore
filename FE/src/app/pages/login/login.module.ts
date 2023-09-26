import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginRoutes } from './login.routing';
import { MaterialModule } from 'app/material/material.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes),
    FormsModule,
    NgbModule,
    MaterialModule,
  ]
})
export class LoginModule { }
