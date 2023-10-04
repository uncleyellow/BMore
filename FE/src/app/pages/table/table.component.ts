import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { MatDialog } from '@angular/material/dialog';
import { BookNewRoomsComponent } from '../bookRooms/book-new-rooms/book-new-rooms.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
  selected: any;
  searchByPlaceParam: any
  constructor(
    public HotelsService: HotelsService,
    public dialog: MatDialog,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.fetch()
  }
  fetch() {

  }
  bookRoomNow() {
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

  searchByPlace(searchByPlaceParam) {

  }

  search(searchParam: any) {

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

  hotelDetails(items: any){
    this.router.navigate(['/hotels']);
  }

}
