import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-delete-users',
    templateUrl: './delete-users.component.html',
    styleUrls: ['./delete-users.component.scss']
})
export class DeleteUsersComponent {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<DeleteUsersComponent>,
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
