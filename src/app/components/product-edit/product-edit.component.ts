import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id:number;
  productFormGroup?:FormGroup;
  submitted: boolean= false;
  constructor(private route: ActivatedRoute, private productService: ProductService,private fb: FormBuilder) { 
    this.id= route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productService.getProduct(this.id).subscribe(product=>{
       this.productFormGroup= this.fb.group({
        id:[product.id,Validators.required],
        name:[product.name,Validators.required],
        price:[product.price,Validators.required],
        quantity:[product.quantity,Validators.required],
        selected:[product.selected,Validators.required],
        available:[product.available,Validators.required]
      })
    })
  }
  updateProductForm(){
    console.log('-----------',this.productFormGroup?.value)
    this.productService.updateProduct(this.productFormGroup?.value).subscribe(product=>{
      alert("seccess product update")
    })
  }
}
