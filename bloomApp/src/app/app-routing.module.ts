import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'galeria', loadChildren: './galeria/galeria.module#GaleriaPageModule' },
  { path: 'resgistrarse', loadChildren: './resgistrarse/resgistrarse.module#ResgistrarsePageModule' },
  { path: 'producto/:id', loadChildren: './producto/producto.module#ProductoPageModule' },
  { path: 'modificar/:id', loadChildren: './modificar/modificar.module#ModificarPageModule' },
  { path: 'eliminar/:id', loadChildren: './eliminar/eliminar.module#EliminarPageModule' },
  { path: 'insertar', loadChildren: './insertar/insertar.module#InsertarPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
