import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginBoxComponent } from '../login-box/login-box.component';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavComponent } from '../sidenav/sidenav.component';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(public dialog: MatDialog) {}

  openLogin() {
    const dialogRef = this.dialog.open(LoginBoxComponent, {
      width: '250px',
    });
  }

  sidenavToggle() {

  }







}
