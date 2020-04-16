import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { DashboardService } from "../../services/dashboard.service";

@Component({
  selector: "app-dashboard-presentation",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./dashboard-presentation.component.html",
  styleUrls: ["./dashboard-presentation.component.css"],
})
export class DashboardPresentationComponent implements OnInit {
  dashboard$ = this.dashboardService.getDashboard();

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {}
}
