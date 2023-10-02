import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../services/reservations.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteBookRoomComponent } from '../bookRooms/delete-book-room/delete-book-room.component';
import { PutBookRoomComponent } from '../bookRooms/put-book-room/put-book-room.component';
import Swal from 'sweetalert2';
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
      height: '325px',
      width: '400px',
      data: {
          title: 'Thông tin đặt phòng',
      },
  });

  dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
          this.fetch();
          this.processResponse(1)
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
      if (result == true) {
          this.fetch();
          this.processResponse(2)
      }
  });
  }

  processResponse(res:any) {
    if(res == 1){
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Sửa Thành Công',
        icon: 'success',
      });
    }
    if(res == 2){
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Xoá Thành Công',
        icon: 'success',
      });
    }
    else{
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Hành động Thất Bại',
        icon: 'error',
      });
    }
  }
}
