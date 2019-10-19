import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {

  public customers:any = [];
  
  constructor(private apiService:ApiService, private route:Router, private toastr:ToastrService) { }

  ngOnInit() {
    this.apiService.getCustomer().subscribe(res => {
      console.log(res);
      this.customers = res;
    });
  }

  public onSelect(customer) {
    this.route.navigate(['/customer', customer.customer_id]);
  }

  deleteCustomer(cId) {
    console.log("You clicked delete")
    this.toastr.success("Deleted Customer Successfully", "Deleted");
    this.apiService.deleteCustomer(cId).subscribe();
  }

}
