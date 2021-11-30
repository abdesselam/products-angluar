import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   host = (Math.random()>0.01)?environment.hostDB:environment.hostDBUnreachable;
  
  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.host}/products`)
  } 
  getProductSelected(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.host}/products?selected=true`)
  } 
  getProductAvailable(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.host}/products?available=true`)
  } 
  getProductSearch(keyword: string): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.host}/products?name_like=${keyword}`)
  } 
  putProductSelected(product: Product): Observable<Product>{
    console.log('------------product--',product)
    product.selected= !product.selected
    return this.http.put<Product>(`${this.host}/products/${product.id}`,product)
  } 
  deleteProductSelected(product: Product): Observable<void>{
    product.selected= !product.selected
    return this.http.delete<void>(`${this.host}/products/${product.id}`)
  } 
  addProductForm(product: Product): Observable<Product>{
    console.log('---------service form',product)
    return this.http.post<Product>(`${this.host}/products`,product)
  } 
  getProduct(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.host}/products/${id}`)
  } 
  updateProduct(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.host}/products/${product.id}`,product)
  } 
  
}
