import { Injectable } from "@angular/core";
import { Dashboard } from "../models/dashboard.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { AuthService } from "src/app/shared/auth/auth.service";

@Injectable()
export class DashboardService {
  private resourceUrl = environment.APIEndpoint;

  constructor(private http: HttpClient, private authService: AuthService) {}

  public getDashboard(): Observable<Dashboard> {
    const user = this.authService.currentUserValue;
    return this.http.get<Dashboard>(
      `${this.resourceUrl}/dashboard/dash/${user.id}`
    );
  }

  public saveDashboard(dashboard: Dashboard): Observable<Dashboard> {
    return this.http.post<Dashboard>(
      `${this.resourceUrl}/dashboard/`,
      dashboard
    );
  }
}
