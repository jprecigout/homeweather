import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { SocketService } from "../../services/socket.service";
import { DashConfItem, Event } from "../../models/dashConfItem.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-dashboard-item",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./dashboard-item.component.html",
  styleUrls: ["./dashboard-item.component.css"],
})
export class DashboardItemComponent implements OnInit {
  @Input() dashItem: DashConfItem;

  value$: Observable<number>;

  constructor(private socketService: SocketService) {}

  ngOnInit() {
    this.socketService.sendMessage(this.dashItem.event, "");
    this.value$ = this.socketService.onEvent(this.dashItem.event);
  }
}
