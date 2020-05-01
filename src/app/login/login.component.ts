import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: "",
    password: "",
  });

  error = null;

  constructor(
    private formBuilder: FormBuilder,
    private app: AppService, 
    private http: HttpClient, 
    private router: Router) {
  }

  login = (loginData) => {
    console.log(loginData)
    this.app.authenticate(loginData, () => {
      this.router.navigateByUrl('/');
    });
    return false;
  }

  ngOnInit() {}
}
