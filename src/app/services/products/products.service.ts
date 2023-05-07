import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from 'src/models/Product';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

  collectionName = 'Products';

  loadProductsMeta(): Observable<Array<Product>> {
    return this.afs.collection<Product>(this.collectionName).valueChanges();
  }

  loadProduct(photoUrl: string) {
    return this.storage.ref(photoUrl).getDownloadURL();
  }
}
