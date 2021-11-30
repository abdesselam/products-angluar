import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  @Output() productEventEmitter = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

getAllProducts(){

}
getProductsSelected(){

}
getProductsAvialable(){

}
addProductsOnSelected(){

}
getProductsSearch(f:any){

}

}
