import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProfilesComponent } from './profiles.component';

const profilesRoutes: Route[] = [
    {
        path     : '',
        component: ProfilesComponent
    }
];

@NgModule({
    declarations: [
        ProfilesComponent
    ],
    imports     : [
        RouterModule.forChild(profilesRoutes)
    ]
})
export class ProfilesModule
{
}
