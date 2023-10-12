import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ReservationComponent } from './reservation.component';
import { MaterialModule } from 'app/material/material.module';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { DeleteReservationComponent } from './delete-reservation/delete-reservation.component';

const reservationRoutes: Route[] = [
    {
        path     : '',
        component: ReservationComponent
    }
];

@NgModule({
    declarations: [
        ReservationComponent,
        EditReservationComponent,
        DeleteReservationComponent
    ],
    imports     : [
        MaterialModule,
        RouterModule.forChild(reservationRoutes)
    ]
})
export class ReservationModule
{
}
