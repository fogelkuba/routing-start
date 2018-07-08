import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {UserComponent} from "./users/user/user.component";
import {HomeComponent} from "./home/home.component";
import {ServerComponent} from "./servers/server/server.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {ServersComponent} from "./servers/servers.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {UsersComponent} from "./users/users.component";
import {AuthGuard} from "./auth-guard.service";

//router
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]},
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ]},
  { path: '404-not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/404-not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes) //router
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
