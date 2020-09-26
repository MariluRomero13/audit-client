import { Component, OnInit } from '@angular/core';
import { RouteInfo, appRoutes } from './../../../models/routeInfo';
import { Router } from '@angular/router';

declare const $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = appRoutes.filter(listTitle => listTitle);
  }

  isMobileMenu(): boolean {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  logout(): void {}
}
