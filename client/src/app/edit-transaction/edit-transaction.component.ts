import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-edit-transaction",
  templateUrl: "./edit-transaction.component.html",
  styleUrls: ["./edit-transaction.component.scss"]
})
export class EditTransactionComponent implements OnInit {
  transaction: any = [];
  tId;
  customers: any = [];
  products: any = [];
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.tId = id;
    this.apiService.getSingleTransaction(this.tId).subscribe(data => {
      this.transaction = data;
    });

    this.apiService.getCustomer().subscribe(res => {
      this.customers = res;
    });

    this.apiService.getProduct().subscribe(data => {
      this.products = data;
    });
  }

  onSubmit(id, value) {
    this.toastr.success("Edited Successfully!!", "Edit Transaction");
    this.apiService.editTransaction(id, value).subscribe();
  }
}
