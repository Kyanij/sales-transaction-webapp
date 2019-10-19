import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-transaction-list",
  templateUrl: "./transaction-list.component.html",
  styleUrls: ["./transaction-list.component.scss"]
})
export class TransactionListComponent implements OnInit {
  transactions: any = [];
  constructor(
    private apiService: ApiService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.apiService.getTransaction().subscribe(data => {
      this.transactions = data;
      console.log(data);
    });
  }

  onSelect(id) {
    this.route.navigate(["/transaction", id]);
  }

  deleteTransaction(id) {
    this.toastr.success("Deleted Successfully!!", "Deleted Transaction");
    this.apiService.deleteTransaction(id).subscribe(data => console.log(data));
  }

  generateInvoice(id) {
    this.route.navigate(["/invoice", id]);
  }
}
