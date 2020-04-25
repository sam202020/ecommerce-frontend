import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProductApiService {
  API_URL = "http://127.0.0.1:8080/products";

  private apiData = new BehaviorSubject<any>(null);
  public apiData$ = this.apiData.asObservable();

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(this.API_URL + "/all");
  }

  // Broadcast api data
  setData(data) {
    this.apiData.next(data);
  }
}
