import { Component, OnInit } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ProductStateDate } from 'src/app/state/product.state.data';
import { ProductStateEnum } from 'src/app/state/product.state.enum';

import { map, catchError, startWith } from 'rxjs/operators';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] =[];
  products$ : Observable<ProductStateDate<Product[]>> | null = null;
  readonly  ProductStateEnum = ProductStateEnum;
  constructor(private productService : ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  getAllProducts(){
    this.products$ = this.productService.getAllProduct().pipe(
      map(data =>{
        console.log('-------------',data)
        return ({dataState:ProductStateEnum.LOADED,data:data})
      }),
      startWith({dataState:ProductStateEnum.LOADING}),
      catchError(err=>{
        console.log('---------------------err--',err)
        return of({dataState:ProductStateEnum.ERROR,errorMessage:err.message})
      })
    );
  }
  getProductsSelected(){
    this.products$ = this.productService.getProductSelected().pipe(
      map(data =>({dataState:ProductStateEnum.LOADED,data:data})),
      startWith({dataState:ProductStateEnum.LOADING}),
      catchError(err=>of({dataState:ProductStateEnum.ERROR,errorMessage:err.message}))
    );
  }
  getProductsAvialable(){
    this.products$ = this.productService.getProductAvailable().pipe(
      map(data =>({dataState:ProductStateEnum.LOADED,data:data})),
      startWith({dataState:ProductStateEnum.LOADING}),
      catchError(err=>of({dataState:ProductStateEnum.ERROR,errorMessage:err.message}))
    );
  }
  getProductsSearch(f: NgForm) {
    console.log('--------------keyword---',f.value)
    this.products$ = this.productService.getProductSearch(f.value.keyword).pipe(
      map(data =>({dataState:ProductStateEnum.LOADED,data:data})),
      startWith({dataState:ProductStateEnum.LOADING}),
      catchError(err=>of({dataState:ProductStateEnum.ERROR,errorMessage:err.message}))
    );
  }
  getProductsOnSelected(product: Product) {
    this.productService.putProductSelected(product).subscribe(data=>product.selected=data.selected)
  }
  deleteProductsOnSelected(product: Product) {
    let v = confirm('vous êtes sûre ?')
    if (v)
    this.productService.deleteProductSelected(product).subscribe(data=>this.getAllProducts())
  }
  addProductsOnSelected() {
    this.router.navigate(["/newProducts"])
  }
  editProductsOnSelected(product : Product) {
    this.router.navigate([`/editProducts/${product.id}`])
  }
}
