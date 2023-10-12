import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RoomsComponent } from './rooms.component';

const roomsRoutes: Route[] = [
    {
        path     : '',
        component: RoomsComponent
    }
];

@NgModule({
    declarations: [
        RoomsComponent
    ],
    imports     : [
        RouterModule.forChild(roomsRoutes)
    ]
})
export class RoomsModule
{
}
