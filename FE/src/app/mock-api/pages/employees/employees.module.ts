import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { MaterialModule } from 'app/material/material.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { FormsModule } from '@angular/forms';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { ManagementEmployeesComponent } from './management-employees/management-employees.component';

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
        DeleteEmployeeComponent,
        ManagementEmployeesComponent
    ],
    imports     : [
        CommonModule,
        MatTableModule,
        MaterialModule,
        CdkTreeModule,
        FormsModule,
        FlexLayoutModule,
        RouterModule.forChild(employeesRoutes)
    ]
})
export class EmployeesModule
{
}
