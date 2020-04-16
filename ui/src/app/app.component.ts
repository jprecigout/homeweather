import { Component, OnDestroy } from "@angular/core";
import { User } from "./shared/auth/user.model";
import { Router } from "@angular/router";
import { AuthService } from "./shared/auth/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnDestroy {
  title = "homeweather-ui";
  curentUser: User;
  private userSub: Subscription;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
    this.userSub = this.authService.currentUser$.subscribe(
      (usr) => (this.curentUser = usr)
    );
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
