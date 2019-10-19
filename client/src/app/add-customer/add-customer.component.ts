import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-add-customer",
  templateUrl: "./add-customer.component.html",
  styleUrls: ["./add-customer.component.scss"]
})
export class AddCustomerComponent implements OnInit {
  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  ngOnInit() {}

  onSubmit(user) {
    this.apiService.addCustomer(user).subscribe();
    this.toastr.success("Added new Customer Successfully", "Added");
  }
}
