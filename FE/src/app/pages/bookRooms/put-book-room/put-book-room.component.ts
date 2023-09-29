import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-put-book-room',
  templateUrl: './put-book-room.component.html',
  styleUrls: ['./put-book-room.component.css']
})
export class PutBookRoomComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PutBookRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {

  }
  save() {

  }
}
