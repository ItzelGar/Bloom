import { Injectable } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { map, take } from 'rxjs/operators'
import { Observable } from 'rxjs'

export interface Producto {
  id?: string;
  nombre: string;
  precio: number;
  color: string;
  talla: string;
  cantidad: number;
  imagen?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productoCollection: AngularFirestoreCollection<Producto>
  private productos: Observable<Producto[]>

  constructor(private afs: AngularFirestore) {
    this.productoCollection = this.afs.collection<Producto>('productos')
    this.productos = this.productoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return { id, ...data }
        })
      })
    )
  }

  getProductos(): Observable<Producto[]> {
    return this.productos
  }

  getProducto(id: string): Observable<Producto> {
    return this.productoCollection.doc<Producto>(id).valueChanges().pipe(
      take(1),
      map(producto => {
        producto.id = id
        return producto
      })
    )
  }

  insertProducto(producto: Producto): Promise<firebase.firestore.DocumentReference> {
    return this.productoCollection.add(producto)
  }

  updateProducto(producto: Producto): Promise<void> {
    const { id } = producto
    delete producto.id
    return this.productoCollection.doc(id).update(producto)
  }

  deleteProducto(id: string): Promise<void> {
    return this.productoCollection.doc(id).delete()
  }
}
