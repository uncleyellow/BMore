import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { MaterialModule } from 'app/material/material.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

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
        RouterModule.forChild(employeesRoutes)
    ]
})
export class EmployeesModule
{
}
