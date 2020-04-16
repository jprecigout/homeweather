import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth/auth.service";
import { take } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form = this.fb.group({
    username: this.fb.control("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
    ]),
    password: this.fb.control("", [Validators.required]),
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.authService
      .login(this.form.value)
      .pipe(take(1))
      .subscribe(
        (data) => this.router.navigate(["/"]),
        (err) => {
          console.log(err);
        }
      );
  }

  ngOnInit() {}
}
