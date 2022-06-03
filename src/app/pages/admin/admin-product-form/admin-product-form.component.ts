import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  constructor(private productService: ProductService,
    private router: Router) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        this.onValidateNameHasProduct
      ]) // FormControl giá trị mặc định 
    })
  }

  ngOnInit(): void {
  }

  onValidateNameHasProduct (control: AbstractControl) : ValidationErrors | null {
    const inputValue = control.value;

    if (!inputValue.includes('product')) {
      return {hasProductError: true}
    }

    return null;
  }
  onSubmit(){
    // Nhận dữ liệu từ form đang có => this.productForm.value
    const data = this.productForm.value;
    // Call API tạo mới
    this.productService.createProduct(data).subscribe((data) => {
      this.router.navigate(['/admin', 'products'])
    }) 
  }
}
