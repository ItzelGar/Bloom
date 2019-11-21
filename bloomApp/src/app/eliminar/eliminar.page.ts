import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService, Producto } from '../servicios/productos.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage {
  producto: Observable<Producto>
  constructor(
    private ps: ProductosService,
    private ar: ActivatedRoute,
    private nc: NavController
  ) {
    this.producto = this.ps.getProducto(this.ar.snapshot.paramMap.get('id'))
  }

  eliminarProducto(id) {
    this.ps.deleteProducto(id)
      .then(() => {
        alert('Se ha eliminado el producto!')
        this.nc.navigateRoot('/galeria');
      })
      .catch(error => {
        console.error(error)
      })
  }
}
