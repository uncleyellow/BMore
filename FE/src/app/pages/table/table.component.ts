import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { MatDialog } from '@angular/material/dialog';
import { BookNewRoomsComponent } from '../bookRooms/book-new-rooms/book-new-rooms.component';

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
      }
    });
  }

  searchByPlace(searchByPlaceParam) {

  }

  search(searchParam: any) {

  }
}
