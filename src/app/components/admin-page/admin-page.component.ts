import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { SMPT } from 'src/app/models/SMTP';
import { User } from 'src/app/models/User';
import { SmtpService } from 'src/app/services/smtp.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  smptSettings: SMPT = new SMPT();

  constructor(private router: Router, private snackbarService: SnackbarService, private userService: UserService, private smtpService: SmtpService){}

  async ngOnInit(): Promise<void> {
    let smtpSettingRequest = this.smtpService.getSmtpSettings();
    await lastValueFrom(smtpSettingRequest)
      .catch((error: HttpErrorResponse) => {
        console.log("error: ", error);
        this.snackbarService.showSnackbar(2, "Loading of SMTP settings failed!");
        return;
      })
      .then(val => {
        delete val.smtpSettings['id'];
        this.smptSettings = (val.smtpSettings ? (val.smtpSettings) : new SMPT());
      });
  }

  async updateSMTPClick() {
    let smtpSettingRequest = this.smtpService.setSmtpSettings(this.smptSettings);
    await lastValueFrom(smtpSettingRequest)
      .catch((error: HttpErrorResponse) => {
        console.log("error: ", error);
        this.snackbarService.showSnackbar(2, "Updating SMTP settings failed!");
        return;
      })
      .then(val => {
        delete val.smtpSettings['id'];
        this.smptSettings = (val.smtpSettings ? val.smtpSettings : new SMPT());
      });
  }


}
