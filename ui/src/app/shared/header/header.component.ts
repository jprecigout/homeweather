import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  @Input() user: User;

  constructor(private router: Router, private authService: AuthService) {}

  onLogout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
