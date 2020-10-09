import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../components/structure/sidebar/sidebar.component';
import { AdminLayoutComponent } from '../components/structure/admin-layout/admin-layout.component';
import { NavbarComponent } from '../components/structure/navbar/navbar.component';
import { ShareModule } from './share.module';
import { PageNotFoundComponent } from '../components/structure/page-not-found/page-not-found.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    PageNotFoundComponent,
    AdminLayoutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    ShareModule
  ],
  entryComponents: [

  ]
})
export class ComponentModule { }
