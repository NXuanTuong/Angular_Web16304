import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/productType';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[]
  // Định nghĩa service dưới tên 1 biến , đã tạo bên 
  constructor(private productService: ProductService) {
    this.products = []
  }
  // Khi component render xong sẽ chạy 1 lần vào ngOnInit
  ngOnInit(): void {
    // Lắng nghe API trả về kq, bao giờ trả về xong thì data sẽ có dữ liệu
    this.onGetList();
  }

  onGetList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data
    });
  }
  onDelete(id: string | number) {
    const confirmDelete  = confirm("Bạn có muốn xóa không ?")

    if(confirmDelete && id) {
      this.productService.delete(id).subscribe((data) => {
        this.onGetList();
      })
    }
  }
}
