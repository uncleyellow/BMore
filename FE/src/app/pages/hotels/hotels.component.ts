import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import Swal from 'sweetalert2';
import { BookNewRoomsComponent } from '../bookRooms/book-new-rooms/book-new-rooms.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(
    public hotelsServices: HotelsService,
    public dialog: MatDialog,

  ) {

  }

  ngOnInit(): void {
    this.fetch()
  }

  fetch(){

  }
  bookRoomNow(){
    let dialogRef = this.dialog.open(BookNewRoomsComponent, {
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

    else{
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
  }

}
