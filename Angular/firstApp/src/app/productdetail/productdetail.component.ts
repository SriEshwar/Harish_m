import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  productData: any;

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.service.getAllProduct().subscribe((data) => {
      console.log(data);
      this.productData = data;
    });
  }

  trackProduct(index: number, product: any): number {
    return product.id; 
  }
}
