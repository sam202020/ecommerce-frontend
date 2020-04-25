import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from '../shared/product-api/product-api.service';
import { Subscription } from 'rxjs';
import { Product } from '../shared/product.model';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  dataSubscription: Subscription;
  product: Product
  constructor(private route: ActivatedRoute, private productApiService: ProductApiService) {}

  ngOnInit() {
    this.dataSubscription = this.productApiService.apiData$.subscribe(product => {
      this.product = product;
    })
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
