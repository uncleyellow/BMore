import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { MaterialModule } from 'app/material/material.module';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { DeleteHotelComponent } from './delete-hotel/delete-hotel.component';

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
        DeleteHotelComponent
    ],
    imports     : [
        MaterialModule,
        RouterModule.forChild(hotelsRoutes)
    ]
})
export class HotelsModule
{
}
