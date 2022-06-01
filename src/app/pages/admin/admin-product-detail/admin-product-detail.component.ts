import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/productType';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product: Product;
  
  constructor(
    private PS: ProductService,
    private activateRoute: ActivatedRoute
    ) { 
      this.product = {
        id: 0,
        name: ''
      };
  }

  ngOnInit(): void {
    // ActivateRoute sẽ có thể đọc biến được truyền vào trên url 
    // tên id được định nghĩa ở app-routing : id
    const idFromUrl = this.activateRoute.snapshot.params['id'];
    this.PS.getProduct(idFromUrl).subscribe(data => {
      this.product = data
    })
  }

}
