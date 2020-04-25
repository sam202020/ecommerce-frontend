import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ProductApiService } from "../shared/product-api/product-api.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"],
})
export class AddProductComponent implements OnInit {
  productForm = this.formBuilder.group({
    name: "",
    description: "",
    price: "",
    discount: "",
    deliveryCharge: "",
    inventory: "",
  });
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private productApiService: ProductApiService
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    this.productApiService.addNewProduct({ ...this.productForm.value }).subscribe(data => {
      this.router.navigateByUrl('/admin/home');
    });
  }
}
