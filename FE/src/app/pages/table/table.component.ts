import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { MatDialog } from '@angular/material/dialog';
import { BookNewRoomsComponent } from '../bookRooms/book-new-rooms/book-new-rooms.component';
import Swal from 'sweetalert2';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'table-cmp',
  moduleId: module.id,
  templateUrl: 'table.component.html',
  styleUrls: ['./table.compoment.css']
})

export class TableComponent implements OnInit {
  public tableData1: TableData;
  public tableData2: TableData;
  items: any[] = []
  searchParam: any
  searchByPlaceParam: any
  places: string[] = ['Place 1', 'Place 2', 'Place 3']; // Danh sách địa điểm

  constructor(
    public HotelsService: HotelsService,
    public dialog: MatDialog,
  ) {

  }

  ngOnInit() {
    this.fetch()
  }

  fetch() {

  }

  bookRoomNow() {
    let dialogRef = this.dialog.open(BookNewRoomsComponent, {
      height: '325px',
      width: '400px',
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

  processResponse(res: any) {
    if (res == true) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Đặt Phòng Thành Công',
        icon: 'success',
      });
    }
    else {
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Đặt Phòng Thất Bại',
        icon: 'error',
      });
    }
  }

  search(searchParam: any) {
    this.fetch()
  }

  searchByPlace(searchByPlaceParam: any) {
    this.fetch()
  }
}
