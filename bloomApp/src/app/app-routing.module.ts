import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'galeria', loadChildren: './galeria/galeria.module#GaleriaPageModule' },
  { path: 'imgtres', loadChildren: './imgtres/imgtres.module#ImgtresPageModule' },
  { path: 'tiendas', loadChildren: './tiendas/tiendas.module#TiendasPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'deseos', loadChildren: './deseos/deseos.module#DeseosPageModule' },
  { path: 'resgistrarse', loadChildren: './resgistrarse/resgistrarse.module#ResgistrarsePageModule' },  { path: 'imgsiete', loadChildren: './imgsiete/imgsiete.module#ImgsietePageModule' },
  { path: 'imgseis', loadChildren: './imgseis/imgseis.module#ImgseisPageModule' },
  { path: 'imgdos', loadChildren: './imgdos/imgdos.module#ImgdosPageModule' },
  { path: 'imgcuatro', loadChildren: './imgcuatro/imgcuatro.module#ImgcuatroPageModule' },
  { path: 'imgcinco', loadChildren: './imgcinco/imgcinco.module#ImgcincoPageModule' },
  { path: 'imgchonguitos', loadChildren: './imgchonguitos/imgchonguitos.module#ImgchonguitosPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
