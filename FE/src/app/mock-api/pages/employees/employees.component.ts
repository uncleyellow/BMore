import { Component, OnInit } from '@angular/core';
import { Configs } from '../ultis/config';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit{
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','actions'];
    dataSource : MatTableDataSource<any> = new MatTableDataSource<any>([]);
    searchText:any
    totalCount: number = 0;
    pageIndex: number = 0;
    pageSize: number = Configs.getConfig('Paging_Size');
    pageSizeOptions = Configs.getConfig('Paging_SizeOptions');
    constructor(

    ){

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
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        this.fetch();
    }
}
