import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, ProductStateDate } from 'src/app/state/product.state.data';
import { ProductActionType, ProductStateEnum } from 'src/app/state/product.state.enum';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productsInput$ :Observable<ProductStateDate<Product[]>> | null = null;
  @Output() productsEventEmitter = new EventEmitter<ActionEvent>()
  readonly  ProductStateEnum = ProductStateEnum;
  constructor() { }

  ngOnInit(): void {
  }

getProductsOnSelected(product: Product){
  this.productsEventEmitter.emit({type: ProductActionType.SELECT_PRODUCTS,payload: product})
}
deleteProductsOnSelected(product: Product){
  this.productsEventEmitter.emit({type: ProductActionType.EDIT_PRODUCTS,payload: product})
}
editProductsOnSelected(product: Product){
  this.productsEventEmitter.emit({type: ProductActionType.DELETE_PRODUCTS,payload: product})
}
onActionEvent($event: ActionEvent){
    this.productsEventEmitter.emit($event)
}

}
