import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';

import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';


const routes: Routes = [
  { path: 'product', component:ProductListComponent},
  {path: 'product/add', component:ProductComponent},
  {path: 'product/:id', component:ProductEditComponent},
  {path: 'deleteProduct/:id', component:DeleteProductComponent},
  {path: 'customer', component:ListCustomersComponent},
  {path: 'customer/add', component:AddCustomerComponent},
  {path: 'customer/:id', component:EditCustomerComponent},
  {path: 'transaction', component:TransactionListComponent},
  {path: 'transaction/add', component:AddTransactionComponent},
  {path: 'transaction/:id', component:EditTransactionComponent},
  {path: 'invoice/:id', component:InvoiceComponent},
    {
      path:'',
      redirectTo:'/product',
      pathMatch:'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
