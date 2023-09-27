import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userName:any
  passWord:any
  email:any
  phoneNumbers:any
  address:any
  rules:boolean =false
  constructor(
    public loginServices: LoginService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }
  register() {
    this.processResponse(true)
    this.router.navigate(['/login']);
  }
  backToLogin(){
    this.router.navigate(['/login']);
  }
  backToForgotPassword(){
    this.router.navigate(['/login/forgotPassword']);
  }
  processResponse(res:any) {
    if(res == true){
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Đăng Ký Thành Công',
        icon: 'success',
      });
    }
    if(res == false){
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Đăng Ký Thất Bại',
        icon: 'error',
      });
    }
  }
}
