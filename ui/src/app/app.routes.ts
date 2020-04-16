import { Routes } from '@angular/router';
import { DashboardPresentationComponent } from './sensor/containers/dashboard-presentation/dashboard-presentation.component';
import { AuthGuard } from './shared/auth/auth.guard';

export const APP_ROUTE: Routes = [
  {
    path: '',
    component: DashboardPresentationComponent,
    canActivate: [AuthGuard]
  }
];
