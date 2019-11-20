import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImgchonguitosPage } from './imgchonguitos.page';

const routes: Routes = [
  {
    path: '',
    component: ImgchonguitosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ImgchonguitosPage]
})
export class ImgchonguitosPageModule {}
