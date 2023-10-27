import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { HotelsService } from '../services/hotels.service';

@Component({
    selector: 'app-add-hotel',
    templateUrl: './add-hotel.component.html',
    styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent {
    isEdit: boolean = false
    name: any
    email: any
    passWords: any
    roomNumbers: any
    descriptions: any
    address: any
    pictures: any
    totalRooms: any
    availableRooms: any
    bookedRooms: any
    id: any
    constructor(
        public dialogRef: MatDialogRef<AddHotelComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public hotelsService: HotelsService
    ) {
        if (this.data.item) {
            this.isEdit = true
            this.id = this.data.item.id
            this.name = this.data.item.name
            this.address = this.data.item.address
            this.roomNumbers = this.data.item.roomNumbers
            this.descriptions = this.data.item.descriptions
            this.pictures = this.data.item.picture
            this.totalRooms = this.data.item.totalRooms
            this.availableRooms = this.data.item.availableRooms
            this.bookedRooms = this.data.item.bookedRooms
        }
    }



    save() {
        const roomNumber = this.bookedRooms + this.availableRooms
        if (this.totalRooms < this.bookedRooms || this.totalRooms < this.availableRooms || this.totalRooms < roomNumber) {
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: 'Số Phòng Còn Lại Hoặc Số Phòng Đã Đặt Không Phù Hợp Với Tổng Số Phòng',
                icon: 'error',
            });
            return
        }
        const hotel = {
            id: this.id,
            name: this.name,
            address: this.address,
            roomNumbers: this.roomNumbers,
            descriptions: this.descriptions,
            picture: this.pictures,
            creatAt: new Date(),
            totalRooms: this.totalRooms,
            availableRooms: this.availableRooms,
            bookedRooms: this.bookedRooms,
            userId: '39adf8bf-fd7f-43e8-b027-5ce8f98fa712'
        };
        if (!this.isEdit) {
            this.hotelsService.createHotel(hotel).subscribe(
                response => {
                    // Xử lý phản hồi thành công
                    this.dialogRef.close(response)
                    this.processResponse(response)
                },
                error => {
                    // Xử lý lỗi
                }
            );
        }
        else {
            this.hotelsService.updateHotel(hotel).subscribe(rs => {
                rs = 'Sửa thành công'
                this.dialogRef.close(rs)
                this.processResponse(rs)
            })
        }
    }

    cancel() {
        this.dialogRef.close()
    }

    processResponse(item) {
        if (item && !this.isEdit) {
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: 'Thêm Khách Sạn Thành Công',
                icon: 'success',
            });
            return
        }
        if (item == 'Sửa thành công' && this.isEdit) {
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: 'Sửa Khách Sạn Thành Công',
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
                title: 'Hành Động Thất Bại',
                icon: 'error',
            });
            return
        }
    }
}
