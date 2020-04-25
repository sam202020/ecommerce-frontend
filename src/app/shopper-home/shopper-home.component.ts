import { Component, OnInit } from "@angular/core";
import { ProductApiService } from "../shared/product-api/product-api.service";
import { Router } from "@angular/router";
import { Product } from "../shared/product.model";

@Component({
  selector: "app-shopper-home",
  templateUrl: "./shopper-home.component.html",
  styleUrls: ["./shopper-home.component.css"],
})
export class ShopperHomeComponent implements OnInit {
  products: any;

  constructor(
    private productApiService: ProductApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productApiService.getAllProducts().subscribe(
      (data: any) => {
        this.products = data;
      },
      (error) => console.error(error)
    );
  }

  selectProduct(product: Product): void {
    let itemId = product ? product.id : null;
    this.productApiService.setData(product);
    this.router.navigate(["/shopper/product"]);
  }
}
