import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { DashConfItem } from "../../models/dashConfItem.model";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-dashboard-configure-item",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./dashboard-configure-item.component.html",
  styleUrls: ["./dashboard-configure-item.component.css"],
})
export class DashboardConfigureItemComponent implements OnInit {
  iconAdd = "add_circle";
  iconDel = "remove_circle";

  @Input() dashConfItem: DashConfItem;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  clickSelected(): void {
    this.dashConfItem.activate = !this.dashConfItem.activate;
  }
}
