import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { MaterialModule } from 'app/material/material.module';
import { AddRoomComponent } from './add-room/add-room.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';

const roomsRoutes: Route[] = [
    {
        path     : '',
        component: RoomsComponent
    }
];

@NgModule({
    declarations: [
        RoomsComponent,
        AddRoomComponent,
        DeleteRoomComponent
    ],
    imports     : [
        MaterialModule,
        RouterModule.forChild(roomsRoutes)
    ]
})
export class RoomsModule
{
}
