import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup?:FormGroup;
  submitted: boolean= false;
  constructor(private fb: FormBuilder,private productService : ProductService) { }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required]
    })
  }

  addProductForm(){
          console.log('--------',this.productFormGroup?.value)
          console.log('--------',this.productFormGroup?.controls)
          console.log('--------',this.productFormGroup)
          this.submitted= true;
          if(this.productFormGroup?.invalid)return
          this.productService.addProductForm(this.productFormGroup?.value).subscribe()
  }

}
