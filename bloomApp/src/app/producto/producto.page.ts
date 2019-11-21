import { Component } from '@angular/core';
import { Producto, ProductosService } from '../servicios/productos.service';
import { AuthService } from '../servicios/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage {
  producto: Observable<Producto>
  esAdmin: Observable<boolean>

  constructor(
    private ps: ProductosService,
    private ar: ActivatedRoute,
    private as: AuthService
  ) { }

  ionViewWillEnter() {
    this.producto = this.ps.getProducto(this.ar.snapshot.paramMap.get('id'))
    this.esAdmin = this.as.getAuthState().pipe(map(user => {
      console.log(user.uid)
      return user.uid === 'uM07loDKebTbf6jfNWMhgiRASjp1'
    }))
  }
}
