import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private apiService:ApiService, private toastr:ToastrService) { }

  ngOnInit() {  
  }
  
  public onSubmit(value){
    this.apiService.addProduct(value).subscribe(
      (data:any) => {
        console.log(data)
      }
    )
    this.toastr.success("Added New Product Successfully", "Added");
  }


}
