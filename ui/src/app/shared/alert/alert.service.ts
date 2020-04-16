import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class AlertService {
  private durationSeconds = 3;

  private config: MatSnackBarConfig = {
    duration: this.durationSeconds * 1000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  };

  constructor(private snackBar: MatSnackBar) {}

  success(message: string) {
    this.snackBar.open(
      message,
      null,
      Object.assign(
        {},
        {
          panelClass: 'bkg-success'
        },
        { ...this.config }
      )
    );
  }

  error(message: string) {
    this.snackBar.open(
      message,
      null,
      Object.assign(
        {},
        {
          panelClass: 'bkg-error'
        },
        { ...this.config }
      )
    );
  }

  info(message: string) {
    this.snackBar.open(
      message,
      null,
      Object.assign(
        {},
        {
          panelClass: 'bkg-info'
        },
        { ...this.config }
      )
    );
  }
}
