import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { UsersManagementService } from '../services/users-management.service';

@Component({
    selector: 'app-delete-users',
    templateUrl: './delete-users.component.html',
    styleUrls: ['./delete-users.component.scss']
})
export class DeleteUsersComponent {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<DeleteUsersComponent>,
        public usersManagementServices: UsersManagementService
    ) {

    }

    save() {
        debugger
        this.usersManagementServices.deleteUser(this.data.item.id).subscribe(rs => {
            debugger
            this.dialogRef.close(rs)
            this.processResponse(rs)
        })
    }

    cancel() {
        this.dialogRef.close()
    }

    processResponse(rs) {
        if (rs) {
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: 'Xoá Tài Khoản Thành Công',
                icon: 'success',
            });
        } else {
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: 'Xoá Tài Khoản Thất Bại',
                icon: 'error',
            });
        }
    }
}
