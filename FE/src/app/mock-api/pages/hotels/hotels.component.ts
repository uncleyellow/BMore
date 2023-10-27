import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookRoomComponent } from './book-room/book-room.component';
import { HotelsService } from './services/hotels.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteHotelComponent } from './delete-hotel/delete-hotel.component';
import { DetailsHotelComponent } from './details-hotel/details-hotel.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';

@Component({
    selector: 'app-hotels',
    templateUrl: './hotels.component.html',
    styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
    items: any[] = []
    searchParam: any
    dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
    displayedColumns = ['image', 'name', 'address', 'totalRoom', 'roomAvaible', 'actions'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    user: any
    selectedPlace: any
    constructor(
        private hotelsService: HotelsService,
        public dialog: MatDialog,
    ) {
        // this.user = false
        this.user = true
        this.items = [
            { place: 'Hà Nội' },
            { place: 'Cát Bà' },
            { place: 'Hải Phòng' },
            { place: 'Đà Nẵng' },
            { place: 'Sài Gòn' },
            { place: 'Nghệ An' },
            { place: 'Thanh Hoá' },
            { place: 'Nha Trang' },
            { place: 'Cần Thơ' },
            { place: 'Vĩnh Phúc' },
        ]
    }

    ngOnInit(): void {
        this.fetch()
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    fetch() {
        this.hotelsService.getHotels().subscribe(
            (data: any) => {
                this.dataSource = data;
            },
            (error) => {
                console.log(error);
            }
        );
    }

    bookRooms(item) {
        let dialogRef = this.dialog.open(BookRoomComponent, {
            panelClass: "add-processcode-dialog",
            data: {
                title: 'Đặt phòng',
                item: item
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.fetch();
            }
        });
    }

    details(item) {
        let dialogRef = this.dialog.open(DetailsHotelComponent, {
            panelClass: "add-processcode-dialog",
            data: {
                title: 'Chi tiết khách sạn',
                item: item
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.fetch();
            }
        });
    }

    search(searchParam) {
        this.hotelsService.search(searchParam).subscribe(
            (result) => {
                debugger
                this.dataSource = result
            },
            (error) => {
                console.error(error); // Xử lý lỗi nếu có
            }
        );
    }

    edit(item) {
        let dialogRef = this.dialog.open(AddHotelComponent, {
            panelClass: "add-processcode-dialog",
            data: {
                title: 'Sửa khách sạn',
                item: item
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.fetch();
            }
        });
    }

    delete(item) {
        let dialogRef = this.dialog.open(DeleteHotelComponent, {
            panelClass: "add-processcode-dialog",
            data: {
                title: 'Xoá khách sạn',
                item: item
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result == null) {
                this.fetch();
            }
        });
    }


    addHotel() {
        let dialogRef = this.dialog.open(AddHotelComponent, {
            panelClass: "add-processcode-dialog",
            data: {
                title: 'Thêm mới khách sạn',
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.fetch();
            }
        });
    }
}
