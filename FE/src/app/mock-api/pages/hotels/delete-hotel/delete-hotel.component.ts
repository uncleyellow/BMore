import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { HotelsService } from '../services/hotels.service';

@Component({
    selector: 'app-delete-hotel',
    templateUrl: './delete-hotel.component.html',
    styleUrls: ['./delete-hotel.component.scss']
})
export class DeleteHotelComponent {
    constructor(
        public dialogRef: MatDialogRef<DeleteHotelComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public hotelsService: HotelsService
    ) {

    }
    save() {
        this.hotelsService.deleteHotel(this.data.item.id).subscribe(rs => {
            debugger
            this.dialogRef.close(rs)
            this.processResponse(rs)
        })
    }

    cancel() {
        this.dialogRef.close()
    }

    processResponse(item) {
        if (item == null) {
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: 'Xoá Khách Sạn Thành Công',
                icon: 'success',
            });
        } else {
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: 'Xoá Khách Sạn Thất Bại',
                icon: 'error',
            });
        }
    }
}
