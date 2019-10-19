import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-add-transaction",
  templateUrl: "./add-transaction.component.html",
  styleUrls: ["./add-transaction.component.scss"]
})
export class AddTransactionComponent implements OnInit {
  customers: any = [];
  products: any = [];

  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  ngOnInit() {
    this.apiService.getCustomer().subscribe(data => {
      this.customers = data;
    });
    this.apiService.getProduct().subscribe(data => {
      this.products = data;
    });
  }

  onSubmit(value) {
    this.toastr.success("Added New Transaction Successfully", "Added");
    this.apiService.addTransaction(value).subscribe();
  }
}
