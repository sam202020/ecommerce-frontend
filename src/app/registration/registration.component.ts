import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthApiService } from "../shared/auth-api/auth-api.service";
import { UserInfoService } from "../shared/user-info/user-info.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  registrationForm = this.formBuilder.group({
    name: "",
    email: "",
    dob: "",
    kind: "",
    password: "",
  });
  constructor(
    private formBuilder: FormBuilder,
    private authApiService: AuthApiService,
    private router: Router,
    private userInfoService: UserInfoService
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    this.authApiService.register({ ...this.registrationForm.value }).subscribe(
      () => {
        this.userInfoService.setData(this.registrationForm.value);
        this.router.navigateByUrl("/shopper/home");
      },
      () => {
        this.userInfoService.setData(this.registrationForm.value);
        this.router.navigateByUrl("/shopper/home");
      }
    );
  }
}
