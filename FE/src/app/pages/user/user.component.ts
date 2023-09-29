import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
  constructor(
    public userServices:UsersService
  ){

  }
    ngOnInit(){

    }
}
