import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../services/reservations.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteBookRoomComponent } from '../bookRooms/delete-book-room/delete-book-room.component';
import { PutBookRoomComponent } from '../bookRooms/put-book-room/put-book-room.component';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  searchParam: any
  constructor(
    public reservationsServices: ReservationsService,
    public dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {

  }

  search(searchParam:any){

  }

  fetch(){

  }

  fixBookRoom(){
    let dialogRef = this.dialog.open(PutBookRoomComponent, {
      panelClass: "add-processcode-dialog",
      data: {
          title: 'Thông tin đặt phòng',
      },
  });

  dialogRef.afterClosed().subscribe((result) => {
      if (result) {
          this.fetch();
      }
  });
  }

  deleteBookRoom(){
    let dialogRef = this.dialog.open(DeleteBookRoomComponent, {
      panelClass: "add-processcode-dialog",
      data: {
          title: 'Thông tin đặt phòng',
      },
  });

  dialogRef.afterClosed().subscribe((result) => {
      if (result) {
          this.fetch();
      }
  });
  }
}
