import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SHARED_ROUTE } from "./shared.routes";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatMenuModule,
  MatIconModule,
} from "@angular/material";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth.guard";
import { AuthInterceptor } from "./auth/auth.interceptor";
import { HeaderComponent } from "./header/header.component";
import { ErrorNotFoundComponent } from "./errors/error-not-found/error-not-found.component";
import { AlertComponent } from "./alert/alert.component";
import { AlertService } from "./alert/alert.service";

@NgModule({
  imports: [
    RouterModule.forRoot(SHARED_ROUTE),
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
  ],
  declarations: [
    LoginComponent,
    HeaderComponent,
    ErrorNotFoundComponent,
    AlertComponent,
  ],
  entryComponents: [AlertComponent],
  providers: [
    AuthService,
    AlertService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  exports: [LoginComponent, HeaderComponent, AlertComponent],
})
export class SharedModule {}
