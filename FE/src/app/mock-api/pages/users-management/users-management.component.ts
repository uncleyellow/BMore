import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddUsersComponent } from './add-users/add-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { UsersManagementService } from './services/users-management.service';

@Component({
    selector: 'app-users-management',
    templateUrl: './users-management.component.html',
    styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {
    items: any[] = []
    searchParam: any
    dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
    displayedColumns = ['id', 'image', 'name', 'address', 'totalRoom', 'roomAvaible', 'creatAt', 'actions'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    user: any
    selectedPlace: any
    constructor(
        public usersMangementServices: UsersManagementService,
        public dialog: MatDialog,
    ) {

    }

    ngOnInit(): void {
        this.fetch()
    }

    fetch() {
        this.usersMangementServices.getUsers().subscribe((rs: any) => {
            this.dataSource = rs
        })
    }

    details(item) {
        let dialogRef = this.dialog.open(AddUsersComponent, {
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

    editUser(item) {
        let dialogRef = this.dialog.open(AddUsersComponent, {
            panelClass: "add-processcode-dialog",
            data: {
                title: 'Đặt phòng',
                item: item,
                isEdit: true
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.fetch();
            }
        });
    }

    delete(item) {
        let dialogRef = this.dialog.open(DeleteUsersComponent, {
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

    search(item) {

    }

    addUser() {
        let dialogRef = this.dialog.open(AddUsersComponent, {
            panelClass: "add-processcode-dialog",
            data: {
                title: 'Thêm mới tài khoản',
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.fetch();
            }
        });
    }
}
