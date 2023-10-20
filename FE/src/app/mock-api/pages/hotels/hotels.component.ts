import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookRoomComponent } from './book-room/book-room.component';
import { HotelsService } from './services/hotels.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteHotelComponent } from './delete-hotel/delete-hotel.component';
import { DetailsHotelComponent } from './details-hotel/details-hotel.component';

@Component({
    selector: 'app-hotels',
    templateUrl: './hotels.component.html',
    styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
    items: any[] = []
    searchParam: any
    dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
    displayedColumns = ['id', 'image', 'name', 'address', 'totalRoom', 'roomAvaible', 'actions'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    user: any
    constructor(
        private hotelsService: HotelsService,
        public dialog: MatDialog,
    ) {
        // this.user = false
        this.user = true
        this.items = [
            {value : 1 , place :'Hà Nội'},
            {value : 2 , place :'Cát Bà'},
            {value : 3 , place :'Hải Phòng'},
            {value : 4 , place :'Đà Nẵng'},
            {value : 5 , place :'Sài Gòn'},
            {value : 6 , place :'Nghệ An'},
            {value : 7 , place :'Thanh Hoá'},
            {value : 8 , place :'Nha Trang'},
            {value : 9 , place :'Cần Thơ'},
            {value : 10 , place :'Vĩnh Phúc'},
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

    }

    edit(item) {

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
            if (result) {
                this.fetch();
            }
        });
    }
}
