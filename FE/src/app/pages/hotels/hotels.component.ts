import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(
    public hotelsServices: HotelsService
  ) {

  }

  ngOnInit(): void {
    this.fetch()
  }

  fetch(){

  }

}
