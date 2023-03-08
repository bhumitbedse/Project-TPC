import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements AfterViewInit{
  constructor(private observer: BreakpointObserver, private router: Router,private storageService:StorageService) { }

  User = this.storageService.getUser();
  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res) => {
        console.log(res);
        if (res.matches) {
          this.sidenav.close();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
          this.sidenav.close();
      });
  }
}
