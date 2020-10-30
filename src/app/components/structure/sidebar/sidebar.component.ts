import { Component, OnInit } from '@angular/core';
import { RouteInfo, appRoutes } from './../../../models/routeInfo';
import { Router } from '@angular/router';
import { Tab } from 'src/app/models/Views/Tab';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

declare const $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categories: Tab[] = [];
  moduleName: string;
  iconName: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  // constructor( private router: Router, private authService: DataService, public viewService: ViewService) { }
  constructor (private breakpointObserver: BreakpointObserver) {}
  ngOnInit() {
    // const token = this.authService.getCookie('token');
    // const user = jwt_decode(token);
    // this.viewService.getViewsByRole(user.data.role_id).subscribe((data) => {
    //   this.categories = data;
    //   this.loading = false;
    // });
  }

  logout(): void {}
}
