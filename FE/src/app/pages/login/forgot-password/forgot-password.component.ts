import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: any

  constructor(
    public loginServices: LoginService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }
  sendMail() {
    if(this.email){
      this.router.navigate(['/login']);
      this.processResponse(true)
    }
    else{
      this.processResponse(false)
    }
  }
  backToLogin(){
    this.router.navigate(['/login']);
  }
  backToRegister(){
    this.router.navigate(['/login/register']);
  }
  processResponse(res: any) {
    if (res == true) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Gửi Mã Thành Công',
        icon: 'success',
      });
    }
    if (res == false) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Gửi Mã Thất Bại',
        icon: 'error',
      });
    }
  }
}
