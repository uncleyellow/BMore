import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservationsService } from 'app/pages/services/reservations.service';

@Component({
  selector: 'app-book-new-rooms',
  templateUrl: './book-new-rooms.component.html',
  styleUrls: ['./book-new-rooms.component.css']
})
export class BookNewRoomsComponent implements OnInit {
  currentDate: string;
  minCheckOutDate: string;
  numbersRoomBooked: any
  checkInDate: any
  checkOutDate: any
  totalPrice:any
  userName:any
  constructor(
    public dialogRef: MatDialogRef<BookNewRoomsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public reservationsService: ReservationsService
  ) {
    const today = new Date();
    this.currentDate = this.formatDate(today);
    const minCheckOutDate = new Date(today.getTime() + 24 * 60 * 60 * 1000); // Thêm 1 ngày
    this.minCheckOutDate = this.formatDate(minCheckOutDate);
  }

  ngOnInit(): void {

  }

  save() {
    this.dialogRef.close(true)
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  }
}
