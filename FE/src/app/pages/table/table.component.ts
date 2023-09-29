import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html',
    styleUrls: ['./table.compoment.css']
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    items:any[] =[]
    constructor(
      public HotelsService:HotelsService
    ){

    }
    ngOnInit(){
        this.fetch()
    }
    fetch(){

    }
    bookRoomNow(){

    }
}
