import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ReservationComponent } from './reservation.component';

const reservationRoutes: Route[] = [
    {
        path     : '',
        component: ReservationComponent
    }
];

@NgModule({
    declarations: [
        ReservationComponent
    ],
    imports     : [
        RouterModule.forChild(reservationRoutes)
    ]
})
export class ReservationModule
{
}
