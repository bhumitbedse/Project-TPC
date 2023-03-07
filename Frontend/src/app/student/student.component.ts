import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements AfterViewInit{
  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private router: Router) { }

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
