import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResgistrarsePage } from './resgistrarse.page';

const routes: Routes = [
  {
    path: '',
    component: ResgistrarsePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResgistrarsePage]
})
export class ResgistrarsePageModule {}
