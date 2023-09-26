import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { AboutUsComponent } from 'app/pages/about-us/about-us.component';
import { ReservationsComponent } from 'app/pages/reservations/reservations.component';
import { RoomsComponent } from 'app/pages/rooms/rooms.component';
import { RoomsManagementComponent } from 'app/pages/rooms-management/rooms-management.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'aboutUs',      component: AboutUsComponent },
    { path: 'reservations',      component: ReservationsComponent },
    { path: 'rooms',      component: RoomsComponent },
    { path: 'roomsManagement',      component: RoomsManagementComponent },
];
