import { Component, OnInit } from "@angular/core";
import { UserInfoService } from "../shared/user-info/user-info.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopper-header",
  templateUrl: "./shopper-header.component.html",
  styleUrls: ["./shopper-header.component.css"],
})
export class ShopperHeaderComponent implements OnInit {
  userDataSubscription: Subscription;
  name: String;
  constructor(private userInfoService: UserInfoService) {}

  ngOnInit() {
    this.userDataSubscription = this.userInfoService.userData$.subscribe(
      (userData) => {
        if (userData) {
          this.name = userData.name;
        }
      }
    );
  }

  ngOnDestroy() {
    this.userDataSubscription.unsubscribe();
  }
}
