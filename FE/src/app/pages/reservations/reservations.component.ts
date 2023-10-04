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
  selected :any;
  searchByPlaceParam: any
  constructor(
    public reservationsServices: ReservationsService,
    public dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {
    debugger
    this.fetch()
  }

  search(searchParam: any) {

  }

  fetch() {

  }

  fixBookRoom() {
    let dialogRef = this.dialog.open(PutBookRoomComponent, {
      panelClass: "add-processcode-dialog",
      data: {
        title: 'Thông tin đặt phòng',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetch();
        this.processResponse(result)
      }
    });
  }

  deleteBookRoom() {
    let dialogRef = this.dialog.open(DeleteBookRoomComponent, {
      panelClass: "add-processcode-dialog",
      data: {
        title: 'Thông tin đặt phòng',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetch();
        this.processResponse(result)
      }
    });
  }

  searchByPlace(searchByPlaceParam) {

  }

  processResponse(res:any) {
    if(res == 'Thêm mới thành công'){
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Thêm mới Thành Công',
        icon: 'success',
      });
    }
    if(res == 'Sửa thành công'){
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
    if(res == 'Xoá thành công'){
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
    if(res == 'Thêm mới Thất Bại'){
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Thêm mới Thất Bại',
        icon: 'error',
      });
    }
    if(res == 'Sửa Thất Bại'){
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Sửa Thất Bại',
        icon: 'error',
      });
    }
    if(res == 'Xoá Thất Bại'){
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Xoá Thất Bại',
        icon: 'error',
      });
    }
  }
}
