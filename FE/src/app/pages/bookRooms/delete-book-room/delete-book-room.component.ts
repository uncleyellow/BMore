import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservationsService } from 'app/pages/services/reservations.service';

@Component({
  selector: 'app-delete-book-room',
  templateUrl: './delete-book-room.component.html',
  styleUrls: ['./delete-book-room.component.css']
})
export class DeleteBookRoomComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteBookRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public reservationsService: ReservationsService
  ) {

  }

  ngOnInit(): void {

  }

  save() {
    this.dialogRef.close(true)
  }
}
