import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: any

  constructor(

  ) {

  }

  ngOnInit(): void {

  }
  sendMail() {

  }
}
