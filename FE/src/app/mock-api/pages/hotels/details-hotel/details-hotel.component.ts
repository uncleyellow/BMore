import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details-hotel',
  templateUrl: './details-hotel.component.html',
  styleUrls: ['./details-hotel.component.scss']
})
export class DetailsHotelComponent {
    constructor(
        public dialogRef: MatDialogRef<DetailsHotelComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {

    }
    save() {
        this.dialogRef.close()
    }

    cancel() {
        this.dialogRef.close()
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
