import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: '', redirectTo: '/chord-identifier', pathMatch: 'full'},
  { path: 'songs', loadChildren: () => import('./my-songs/songs.module').then(m => m.SongsModule)},
  { path: 'chord-identifier', loadChildren: () => import('./chord-identifier/chord.module').then(m => m.ChordModule)},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
