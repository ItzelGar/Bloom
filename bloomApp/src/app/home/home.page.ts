import { Component } from '@angular/core';
import {NavController} from '@ionic/angular'
import { ResgistrarsePage } from '../resgistrarse/resgistrarse.page';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


 




  constructor( 
   
    ) 
   
  {


  }
 

inicioSesion(){
  alert('Bienvendo');

}


}

