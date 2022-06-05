import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;
  
  constructor(private productService: ProductService,
    private router: Router, 
    private activateRoute: ActivatedRoute ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        this.onValidateNameHasProduct
      ]) // FormControl giá trị mặc định 
    })
    this.productId = '';
  }

  ngOnInit(): void {
   this.productId = this.activateRoute.snapshot.params['id'];
    if (this.productId) {
      this.productService.getProduct(+this.productId).subscribe(data => {
        this.productForm.patchValue({
          name: data.name
        })
      })
    }
  } 

  onValidateNameHasProduct (control: AbstractControl) : ValidationErrors | null {
    const inputValue = control.value;

    if (inputValue && inputValue.length > 6 && !inputValue.includes('product')) {
      return {hasProductError: true}
    }

    return null;
  }

  redirectToList() {
    this.router.navigateByUrl('/admin/products')
  }

  onSubmit(){
    // Nhận dữ liệu từ form đang có => this.productForm.value
    const data = this.productForm.value;
    if (this.productId !== '' && this.productId !== undefined) {
      return this.productService.editProduct(this.productId, data).subscribe(data => {
        this.redirectToList()
      }) 
    }
    // Call API tạo mới
    return this.productService.createProduct(data).subscribe((data) => {
      this.redirectToList()
    }) 
  }
}
