import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-hotel',
  templateUrl: './delete-hotel.component.html',
  styleUrls: ['./delete-hotel.component.scss']
})
export class DeleteHotelComponent {
    constructor(
        public dialogRef: MatDialogRef<DeleteHotelComponent>,
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
