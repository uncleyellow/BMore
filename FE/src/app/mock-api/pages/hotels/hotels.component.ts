import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookRoomComponent } from './book-room/book-room.component';
import { HotelsService } from './services/hotels.service';

@Component({
    selector: 'app-hotels',
    templateUrl: './hotels.component.html',
    styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
    items:any[] = []
    constructor(
        private hotelsService: HotelsService,
        public dialog: MatDialog,
    ) {

    }

    ngOnInit(): void {
        this.fetch()
    }

    fetch() {
        this.hotelsService.getHotels().subscribe(
            (data: any[]) => {
                this.items = data;
            },
            (error) => {
                console.log(error);
            }
        );
    }

    bookRooms(item){
        debugger
        let dialogRef = this.dialog.open(BookRoomComponent, {
            panelClass: "add-processcode-dialog",
            data: {
                title: 'Đặt phòng',
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.fetch();
            }
        });
    }

    details(item){
        debugger
    }
}
