import { Routes } from '@angular/router';
import { DashboardPresentationComponent } from './containers/dashboard-presentation/dashboard-presentation.component';
import { DashboardConfigureComponent } from './containers/dashboard-configure/dashboard-configure.component';
import { AuthGuard } from '../shared/auth/auth.guard';

export const SENSOR_ROUTE: Routes = [
  {
    path: 'sensor/dashboard',
    component: DashboardPresentationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sensor/dashboard/configure',
    component: DashboardConfigureComponent,
    canActivate: [AuthGuard]
  }
];
