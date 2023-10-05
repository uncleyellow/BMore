import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteBookRoomComponent } from '../bookRooms/delete-book-room/delete-book-room.component';
import { PutBookRoomComponent } from '../bookRooms/put-book-room/put-book-room.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  searchParam:any
  selected :any;
  searchByPlaceParam: any
  constructor(
    public dialog: MatDialog,
  ) {

   }

  ngOnInit(): void {
    debugger
  }

  search(searchParam){

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

  searchByPlace(searchByPlaceParam) {

  }
}
