import { Component } from '@angular/core';
import { Producto, ProductosService } from '../servicios/productos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
})
export class GaleriaPage {
  productos: Observable<Producto[]>

  constructor(private ps: ProductosService) {}

  ionViewWillEnter() {
    this.productos = this.ps.getProductos()
  }

  verImagen() {
    alert('Usted ha seleccionado una imagen')
  }
}

