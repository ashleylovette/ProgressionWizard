import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { SessionGuard } from "./auth/session.guard";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'songs', loadChildren: () => import('./my-songs/songs.module').then(m => m.SongsModule)},
  { path: 'chord-identifier', loadChildren: () => import('./chord-identifier/chord.module').then(m => m.ChordModule)},
  { path: 'auth', canActivate: [SessionGuard], loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
