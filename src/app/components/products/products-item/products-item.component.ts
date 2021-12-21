import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ActionEvent } from 'src/app/state/product.state.data';
import { ProductActionType } from 'src/app/state/product.state.enum';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() product: Product | null=null;
  @Output() eventEmitter= new EventEmitter<ActionEvent>();
  constructor() { }

  ngOnInit(): void {
  }

getProductsOnSelected(product: Product){
  this.eventEmitter.emit({type:ProductActionType.SELECT_PRODUCTS,payload:product })
}
deleteProductsOnSelected(product: Product){
  this.eventEmitter.emit({type: ProductActionType.EDIT_PRODUCTS,payload: product})
}
editProductsOnSelected(product: Product){
  this.eventEmitter.emit({type: ProductActionType.EDIT_PRODUCTS, payload:product})
}

}
