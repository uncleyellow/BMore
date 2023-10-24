import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from 'app/material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsersManagementComponent } from './users-management.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';

const usersManagementRoutes: Route[] = [
    {
        path     : '',
        component: UsersManagementComponent
    }
];

@NgModule({
    declarations: [
        UsersManagementComponent,
        AddUsersComponent,
        DeleteUsersComponent
    ],
    imports     : [
        CommonModule,
        MatTableModule,
        MaterialModule,
        CdkTreeModule,
        FormsModule,
        FlexLayoutModule,
        RouterModule.forChild(usersManagementRoutes)
    ]
})
export class UsersManagementModule
{
}
