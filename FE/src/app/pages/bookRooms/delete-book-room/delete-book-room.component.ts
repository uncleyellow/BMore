import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-book-room',
  templateUrl: './delete-book-room.component.html',
  styleUrls: ['./delete-book-room.component.css']
})
export class DeleteBookRoomComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteBookRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

  }

  ngOnInit(): void {

  }
  save() {

  }
}
