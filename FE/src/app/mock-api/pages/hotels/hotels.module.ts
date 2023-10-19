import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { MaterialModule } from 'app/material/material.module';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { DeleteHotelComponent } from './delete-hotel/delete-hotel.component';
import { CommonModule } from '@angular/common';
import { BookRoomComponent } from './book-room/book-room.component';

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
        BookRoomComponent
    ],
    imports     : [
        CommonModule,
        MaterialModule,
        RouterModule.forChild(hotelsRoutes)
    ]
})
export class HotelsModule
{
}
