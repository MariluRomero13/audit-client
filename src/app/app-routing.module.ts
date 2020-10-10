import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './components/structure/admin-layout/admin-layout.component';
import { PageNotFoundComponent } from './components/structure/page-not-found/page-not-found.component';
import { dashboardRoutes } from './components/structure/dashboard.routes';

const appRoutes: Routes = [
  // { path: 'panel', redirectTo: '/panel/dashboard', pathMatch: 'full' },
  { path: '', redirectTo: '/panel', pathMatch: 'full' },
  { path: 'panel', component: AdminLayoutComponent, children: dashboardRoutes},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
