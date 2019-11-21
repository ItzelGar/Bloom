import { Component } from '@angular/core';
import { ProductosService, Producto } from '../servicios/productos.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.page.html',
  styleUrls: ['./insertar.page.scss'],
})
export class InsertarPage {
  producto: Producto = {
    nombre: '',
    precio: 0,
    color: '',
    talla: '',
    cantidad: 0,
    imagen: ''
  }
  constructor(
    private ps: ProductosService,
    private nc: NavController
  ) { }

  insertarProducto() {
    this.ps.insertProducto(this.producto)
      .then(() => {
        alert('Se ha insertado producto correctamente!')
        this.nc.navigateRoot('/galeria')
      })
      .catch(error => {
        console.error(error)
      })
  }
}
