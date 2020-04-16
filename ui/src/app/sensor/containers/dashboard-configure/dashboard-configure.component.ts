import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../../services/dashboard.service";
import { Observable } from "rxjs";
import { Dashboard } from "../../models/dashboard.model";
import { AlertService } from "src/app/shared/alert/alert.service";
import { take } from "rxjs/operators";

@Component({
  selector: "app-dashboard-configure",
  templateUrl: "./dashboard-configure.component.html",
  styleUrls: ["./dashboard-configure.component.css"],
})
export class DashboardConfigureComponent implements OnInit {
  private dashboard$: Observable<
    Dashboard
  > = this.dashboardService.getDashboard();

  dash: Dashboard;

  constructor(
    private dashboardService: DashboardService,
    private alertService: AlertService
  ) {
    this.dashboard$.pipe(take(1)).subscribe((dashboard) => {
      this.dash = dashboard;
    });
  }

  ngOnInit() {}

  click() {
    this.dashboardService
      .saveDashboard(this.dash)
      .pipe(take(1))
      .subscribe(
        (dashSaved) => this.alertService.success("Dashboard saved"),
        (error) => this.alertService.error("Error : Dashboard not saved")
      );
  }
}
