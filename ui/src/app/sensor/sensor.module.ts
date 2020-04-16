import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
} from "@angular/material";

import { DashboardPresentationComponent } from "./containers/dashboard-presentation/dashboard-presentation.component";
import { SocketService } from "./services/socket.service";
import { RouterModule } from "@angular/router";
import { SENSOR_ROUTE } from "./sensor.routes";
import { DashboardConfigureComponent } from "./containers/dashboard-configure/dashboard-configure.component";
import { DashboardConfigureItemComponent } from "./components/dashboard-configure-item/dashboard-configure-item.component";
import { DashboardService } from "./services/dashboard.service";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DashboardItemComponent } from "./components/dashboard-item/dashboard-item.component";
import { ActivateFilter } from "./pipe/filter-activate.pipe";

@NgModule({
  imports: [
    RouterModule.forRoot(SENSOR_ROUTE),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    CommonModule,
  ],
  declarations: [
    ActivateFilter,
    DashboardPresentationComponent,
    DashboardConfigureComponent,
    DashboardConfigureItemComponent,
    DashboardComponent,
    DashboardItemComponent,
  ],
  entryComponents: [],
  providers: [SocketService, DashboardService],
  exports: [DashboardPresentationComponent, DashboardConfigureComponent],
})
export class SensorModule {}
