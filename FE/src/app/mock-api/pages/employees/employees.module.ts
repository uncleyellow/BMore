import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { EmployeesComponent } from './employees.component';

const employeesRoutes: Route[] = [
    {
        path     : '',
        component: EmployeesComponent
    }
];

@NgModule({
    declarations: [
        EmployeesComponent
    ],
    imports     : [
        RouterModule.forChild(employeesRoutes)
    ]
})
export class EmployeesModule
{
}
