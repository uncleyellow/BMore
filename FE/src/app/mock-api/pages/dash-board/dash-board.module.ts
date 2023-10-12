import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board.component';

const DashBoardRoutes: Route[] = [
    {
        path     : '',
        component: DashBoardComponent
    }
];

@NgModule({
    declarations: [
        DashBoardComponent
    ],
    imports     : [
        RouterModule.forChild(DashBoardRoutes)
    ]
})
export class DashBoardModule
{
}
