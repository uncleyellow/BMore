import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-book-new-rooms',
  templateUrl: './book-new-rooms.component.html',
  styleUrls: ['./book-new-rooms.component.css']
})
export class BookNewRoomsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BookNewRoomsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

  }

  ngOnInit(): void {

  }
  save() {
    this.dialogRef.close("Thêm mới thành công");
  }
  cancel(){
    this.dialogRef.close("Thêm mới Thất Bại");
  }
}
