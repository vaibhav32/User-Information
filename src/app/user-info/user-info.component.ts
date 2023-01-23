import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.css"],
})
export class UserInfoComponent implements OnInit {
  displayedColumns: string[] = [
    "name",
    "username",
    "email",
    "address",
    "phone number",
  ];
  products = [];
  cols: any[] = [];

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.getUserInfo().subscribe((res: any) => {
      console.log(res);
      this.products = res.map((e: any) => ({
        Id: e.Id,
        name: e.name,
        username: e.username,
        email: e.email,
        address: e.address?.suite + ',' + e.address?.street +   ',' + e.address?.city +  ',' + e.address?.zipcode ,
        "phone number": e?.phone,
      }));
    });
  }

  getUserInfo() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(): any {
    return { error: true };
  }
}
