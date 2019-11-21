import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto, ProductosService } from '../servicios/productos.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage {
  producto: Observable<Producto>
  constructor(
    private ps: ProductosService,
    private ar: ActivatedRoute,
    private nc: NavController
  ) {
    this.producto = this.ps.getProducto(this.ar.snapshot.paramMap.get('id'))
  }

  modificarProducto(producto) {
    this.ps.updateProducto(producto)
      .then(() => {
        alert('Se actualizo el producto exitosamente!')
        this.nc.back()
      })
      .catch(error => {
        console.error(error)
      })
  }
}
