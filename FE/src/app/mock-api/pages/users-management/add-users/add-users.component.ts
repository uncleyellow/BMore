import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { UsersManagementService } from '../services/users-management.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-add-users',
    templateUrl: './add-users.component.html',
    styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent {
    isEdit: boolean = false
    name: any
    email: any
    passWords: any
    phone: any
    role: any
    address: any
    pictures: any
    selectedRole: any
    id: any
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddUsersComponent>,
        public usersManagementServices: UsersManagementService
    ) {
        this.role = [
            { user: 'admin' },
            { user: 'employees' },
            { user: 'customer' },
            { user: 'management' },

        ]
        if (data.isEdit) {
            this.isEdit = true
            this.id = this.data.item.id
            this.name = this.data.item.userName
            this.selectedRole = this.data.item.role
            this.email = this.data.item.email
            this.passWords = this.data.item.passWords
            this.address = this.data.item.address
            this.phone = this.data.item.phoneNumbers
            this.pictures = this.data.item.pictures
        }
    }

    checkEmailAndPhoneDuplicate(): Observable<boolean> {
        const email = this.email;
        const phone = this.phone;

        return this.usersManagementServices.getUsers().pipe(
            map((users: any[]) => {
                const duplicateEmail = users.some(user => user.email === email);
                const duplicatePhone = users.some(user => user.phoneNumbers === phone);
                return duplicateEmail || duplicatePhone;
            })
        );
    }


    save() {
        this.checkEmailAndPhoneDuplicate()
        const item = {
            id: this.id,
            userName: this.name,
            role: this.selectedRole,
            email: this.email,
            passWords: this.passWords,
            address: this.address,
            phoneNumbers: this.phone,
            pictures: this.pictures,
            creatAt: new Date(),
        };
        if (!this.isEdit) {
            this.checkEmailAndPhoneDuplicate().subscribe(duplicate => {
                if (duplicate) {
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        title: 'Email Hoặc Số Điện Thoại Đã Tồn Tại',
                        icon: 'error',
                    });
                    return
                }
                else {
                    this.usersManagementServices.createUser(item).subscribe(rs => {
                        this.dialogRef.close(rs)
                        this.processResponse(rs)
                    })
                }
            })
        }
        else {
            this.usersManagementServices.updateUser(item).subscribe(rs => {
                this.dialogRef.close(rs)
                this.processResponse(rs)
            })
        }
    }

    cancel() {
        this.dialogRef.close()
    }

    processResponse(rs) {
        debugger
        if (rs && !this.isEdit) {
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: 'Thêm mới tài khoản thành công',
                icon: 'success',
            });
            return
        }
        if (rs && this.isEdit) {
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: 'Sửa tài khoản thành công',
                icon: 'success',
            });
            return
        }
        else {
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: 'Hành động Thất Bại',
                icon: 'error',
            });
            return
        }
    }

    searchRole(selectedRole) {

    }
}
