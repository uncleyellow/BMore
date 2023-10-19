import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { MaterialModule } from 'app/material/material.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { FormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';

const employeesRoutes: Route[] = [
    {
        path     : '',
        component: EmployeesComponent
    }
];

@NgModule({
    declarations: [
        EmployeesComponent,
        AddEmployeeComponent,
        DeleteEmployeeComponent
    ],
    imports     : [
        MaterialModule,
        RouterModule.forChild(employeesRoutes),
        FormsModule,
        CdkTableModule
    ]
})
export class EmployeesModule
{
}
