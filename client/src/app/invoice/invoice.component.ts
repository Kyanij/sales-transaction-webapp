import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  cId:any;
  details:any = [];
  customerDetails:any = [];
  subTotal:number;
  GrandTotal:number;
  

  constructor(private route:ActivatedRoute, private apiService:ApiService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.cId = id;

    this.apiService.getSingleCustomer(this.cId).subscribe(data => { 
      this.customerDetails = data;
    })

    this.apiService.generateInvoice(this.cId).subscribe((data:any) => {
      let array = data;
      let l = data.length;
      let s = 0;
      for(let i=0; i<l; i++) {
      let t = array[i].Total;
      s = s + t;
      }
      this.subTotal = s;
      this.GrandTotal = this.subTotal + 200;
      this.details = data;
    });

 



  }

}
