import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { MaterialModule } from 'app/material/material.module';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { DeleteHotelComponent } from './delete-hotel/delete-hotel.component';
import { CommonModule } from '@angular/common';
import { BookRoomComponent } from './book-room/book-room.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailsHotelComponent } from './details-hotel/details-hotel.component';

const hotelsRoutes: Route[] = [
    {
        path     : '',
        component: HotelsComponent
    }
];

@NgModule({
    declarations: [
        HotelsComponent,
        AddHotelComponent,
        DeleteHotelComponent,
        BookRoomComponent,
        DetailsHotelComponent
    ],
    imports     : [
        CommonModule,
        MatTableModule,
        MaterialModule,
        CdkTreeModule,
        FormsModule,
        FlexLayoutModule,
        RouterModule.forChild(hotelsRoutes)
    ]
})
export class HotelsModule
{
}
