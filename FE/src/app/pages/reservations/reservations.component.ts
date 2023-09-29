import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  searchParam: any
  constructor(
    public reservationsServices: ReservationsService
  ) {

  }

  ngOnInit(): void {

  }

  search(searchParam:any){

  }

  fetch(){

  }
}
