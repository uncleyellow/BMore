import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-book-room',
  templateUrl: './delete-book-room.component.html',
  styleUrls: ['./delete-book-room.component.css']
})
export class DeleteBookRoomComponent implements OnInit {
  message: string = "Bạn có đồng ý xoá không ?"
  cancelButtonText = "Cancel"

  constructor(
    public dialogRef: MatDialogRef<DeleteBookRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

  }

  ngOnInit(): void {

  }
  save() {
    this.dialogRef.close("Xoá thành công");
  }
  cancel(){
    this.dialogRef.close("Xoá Thất Bại");
  }
}
