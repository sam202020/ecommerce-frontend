import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../shared/product-api/product-api.service';

@Component({
  selector: "app-admin-home",
  templateUrl: "./admin-home.component.html",
  styleUrls: ["./admin-home.component.css"],
})
export class AdminHomeComponent implements OnInit {
  products: any;

  constructor(private productApiService: ProductApiService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productApiService.getAllProducts().subscribe(
      (data: any) => {
        console.log(data);
        this.products = data;
      },
      (error) => console.error(error)
    );
  }
}
