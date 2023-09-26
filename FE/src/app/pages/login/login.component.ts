import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:any
  passWord:any

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }
  processResponse(res:any) {
    if(res == true){
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Đăng Nhập Thành Công',
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
        title: 'Đăng Nhập Thất Bại',
        icon: 'error',
      });
    }
  }
  login(){
    if(this.userName =='khanh@gmail.com' && this.passWord == '5182254d'){
      this.router.navigate(['/dashboard']);
      this.processResponse(true)
    }
    else{
      this.processResponse(false)
    }
  }
}
