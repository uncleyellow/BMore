import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeesService } from './services/employees.service';
import { MatDialog } from '@angular/material/dialog';
import { ManagementEmployeesComponent } from './management-employees/management-employees.component';
import { HotelsService } from '../hotels/services/hotels.service';
@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
    searchParam: any
    selectedPlace: any
    items: any[] = []
    dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
    displayedColumns = ['image', 'name', 'address', 'totalRoom', 'actions'];
    constructor(
        public employeesService: EmployeesService,
        private hotelsService: HotelsService,
        public dialog: MatDialog,
    ) {
        this.items = [
            { value: '0', sex: 'Nam' },
            { value: '1', sex: 'Nữ' },
            { value: '2', sex: 'Không rõ' },
        ]
    }

    ngOnInit(): void {
        this.fetch()
    }

    search(event) {
        this.hotelsService.search(event).subscribe(
            (result) => {
                debugger
                this.dataSource = result
            },
            (error) => {
                console.error(error); // Xử lý lỗi nếu có
            }
        );
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

    pageEvent(event: PageEvent) {

    }

    searchBySex(selectedPlace) {

    }

    edit(item) {
        let dialogRef = this.dialog.open(ManagementEmployeesComponent, {
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
}
