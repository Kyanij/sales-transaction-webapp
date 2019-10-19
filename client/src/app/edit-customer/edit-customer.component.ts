import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  user:any = [];
  cId;

  constructor(private route:ActivatedRoute, private apiService:ApiService, private toastr:ToastrService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.cId = id;
    this.apiService.getSingleCustomer(this.cId).subscribe(data => {
      this.user = data
    });

    
  }

  onSubmit(id, user) {
    this.toastr.success("Edited Customer Info Successfually", "Edited");
    this.apiService.editCustomer(id, user).subscribe();
  }
}
