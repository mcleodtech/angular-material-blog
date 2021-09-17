import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginBoxComponent } from '../login-box/login-box.component';
import { matDrawerAnimations } from '@angular/material/sidenav';


@Component({
  selector: 'app-navigation-schematic',
  templateUrl: './navigation-schematic.component.html',
  styleUrls: ['./navigation-schematic.component.css']
})
export class NavigationSchematicComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    openLogin() {
      const dialogRef = this.dialog.open(LoginBoxComponent, {
        width: '250px',
      });
    }


  constructor(private breakpointObserver: BreakpointObserver,
              public dialog: MatDialog) {}

}
