import { Injectable } from "@angular/core";
import { User } from "../auth/user.model";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "./../../../environments/environment";

@Injectable()
export class AuthService {
  private resourceUrl = environment.APIEndpoint;
  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  currentUser$: Observable<User> = this.currentUserSubject.asObservable();

  constructor(private router: Router, private http: HttpClient) {}

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: User) {
    return this.http.post(`${this.resourceUrl}/auth/login`, user).pipe(
      map((user: User) => {
        localStorage.setItem("currentUser", JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
