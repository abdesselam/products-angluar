import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActionEvent } from 'src/app/state/product.state.data';
import { ProductActionType } from 'src/app/state/product.state.enum';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  @Output() productEventEmitter = new EventEmitter<ActionEvent>()
  constructor() { }

  ngOnInit(): void {
  }

getAllProducts(){
  this.productEventEmitter.emit({type:ProductActionType.GET_ALL_PRODUCTS})
}
getProductsSelected(){
  this.productEventEmitter.emit({type:ProductActionType.GET_SELECTED_PRODUCTS})
}
getProductsAvialable(){
  this.productEventEmitter.emit({type:ProductActionType.GET_AVAIBLE_PRODUCTS})
}
addProductsOnSelected(){
  this.productEventEmitter.emit({type:ProductActionType.GET_NEW_PRODUCTS})
}
getProductsSearch(dataForm:any){
  this.productEventEmitter.emit({type:ProductActionType.SEARCH_PRODUCTS})
}

}
