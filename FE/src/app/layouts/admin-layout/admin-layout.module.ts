import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'app/material/material.module';
import { AboutUsComponent } from 'app/pages/about-us/about-us.component';
import { ReservationsComponent } from 'app/pages/reservations/reservations.component';
import { RoomsManagementComponent } from 'app/pages/rooms-management/rooms-management.component';
import { BookNewRoomsComponent } from 'app/pages/bookRooms/book-new-rooms/book-new-rooms.component';
import { DeleteBookRoomComponent } from 'app/pages/bookRooms/delete-book-room/delete-book-room.component';
import { PutBookRoomComponent } from 'app/pages/bookRooms/put-book-room/put-book-room.component';
import { EmployeesComponent } from 'app/pages/employees/employees.component';
import { HotelsComponent } from 'app/pages/hotels/hotels.component';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from 'app/pages/services/base.service';
import { HotelsService } from 'app/pages/services/hotels.service';
import { ReservationsService } from 'app/pages/services/reservations.service';
import { RoomsService } from 'app/pages/services/rooms.service';
import { UsersService } from 'app/pages/services/users.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    MaterialModule,
    HttpClientModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    AboutUsComponent,
    ReservationsComponent,
    RoomsManagementComponent,
    BookNewRoomsComponent,
    DeleteBookRoomComponent,
    PutBookRoomComponent,
    EmployeesComponent,
    HotelsComponent
  ],
  providers: [
    BaseService,
    HotelsService,
    ReservationsService,
    RoomsService,
    UsersService
  ]
})

export class AdminLayoutModule { }
