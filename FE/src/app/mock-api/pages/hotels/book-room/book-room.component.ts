import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-book-room',
    templateUrl: './book-room.component.html',
    styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent {

    constructor(
        public dialogRef: MatDialogRef<BookRoomComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {

    }

    processResponse() {
        if (this.data.status == "success") {
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              title: 'Đặt Phòng Thành Công',
              icon: 'success',
            });
          } else {
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
}
