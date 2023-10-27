import { Component, OnInit } from '@angular/core';
import { Configs } from '../ultis/config';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeesService } from './services/employees.service';
@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit{
    searchParam:any
    selectedPlace:any
    items:any[] = []
    dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
    displayedColumns = ['image', 'name', 'address', 'totalRoom', 'roomAvaible', 'actions'];
    constructor(
        public employeesService : EmployeesService
    ){
        this.items = [
            {value : '0' , sex :'Nam'},
            {value : '1' , sex :'Nữ'},
            {value : '2' , sex :'Không rõ'},
        ]
    }

    ngOnInit(): void {
        this.fetch()
    }
    search(event){

    }
    add(){

    }

    fetch(){

    }

    pageEvent(event: PageEvent) {

    }

    searchBySex(selectedPlace){

    }

    addEmployees(){

    }

    delete(item){

    }

    edit(item){

    }
}
