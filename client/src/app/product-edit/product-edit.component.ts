import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.scss"]
})
export class ProductEditComponent implements OnInit {
  items: any = [];
  public pId;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.pId = id;
    this.apiService.getSingleProduct(this.pId).subscribe(data => {
      this.items = data;
    });
  }

  public onEdit(Id, item) {
    this.toastr.success("Edited a product Successfully", "Edited");
    return this.apiService
      .editProduct(Id, item)
      .subscribe(data => console.log(data));
  }
}
