import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productdetail',
  standalone: true,
  imports: [],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent {
  productData:any;

  constructor(private service: ProductService){}

  ngOnInit(){
    this.service.getAllProduct().subscribe((data)=>{
      console.log(data);
      this.productData=data;
      
    })
  }
}
