import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels.component';

const hotelsRoutes: Route[] = [
    {
        path     : '',
        component: HotelsComponent
    }
];

@NgModule({
    declarations: [
        HotelsComponent
    ],
    imports     : [
        RouterModule.forChild(hotelsRoutes)
    ]
})
export class HotelsModule
{
}
