import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  public items: any = [];
  constructor(
    private router: Router,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.apiService.getProduct().subscribe(data => {
      this.items = data;
    });
  }

  public onSelect(item) {
    this.router.navigate(["/product", item.product_id]);
    return this.apiService
      .editProduct(item.product_id, item)
      .subscribe(data => {
        console.log(data);
      });
  }

  public delete(item) {
    this.toastr.success("Successfully Deleted Product", "Deleted");
    return this.apiService.deleteProduct(item.product_id).subscribe(data => {
      console.log(data);
    });
  }
}
