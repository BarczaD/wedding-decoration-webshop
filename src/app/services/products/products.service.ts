import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from 'src/models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private afs: AngularFirestore) { }

  collectionName = 'Products';

  loadProducts(metaUrl: string): Observable<Array<Product>> {
    return this.afs.collection<Product>(this.collectionName).valueChanges();
  }
}
