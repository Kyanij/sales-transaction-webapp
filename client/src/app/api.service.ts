import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  UserResponse  from './data';


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private httpClient: HttpClient) { }
  product_url = 'http://localhost:3000/api/product';
  customer_url = 'http://localhost:3000/api/customer';
  transaction_url = 'http://localhost:3000/api/transaction';
  invoice_url = 'http://localhost:3000/api/generate-invoice';

  // Product 
  public getProduct() {
    return this.httpClient.get(this.product_url);
  }

  public addProduct(item) {
    return this.httpClient.post(this.product_url,item);
  }

  public deleteProduct(itemId) {
    return this.httpClient.delete(`${this.product_url}/${itemId}`);
  }

  public editProduct(itemId, item) {
    return this.httpClient.put(`${this.product_url}/${itemId}`, item);
  }

  public getSingleProduct(itemId) { 
    return this.httpClient.get(`${this.product_url}/${itemId}`);
  }


  // Customer

  // List of all customers
  public getCustomer() {
    return this.httpClient.get(this.customer_url);
  }

  public getSingleCustomer(id) {
    return this.httpClient.get(`${this.customer_url}/${id}`);
  }

  public deleteCustomer(id) {
    return this.httpClient.delete(`${this.customer_url}/${id}`);
  }
  public editCustomer(Id, user) {
    return this.httpClient.put(`${this.customer_url}/${Id}`, user);
  }

  public addCustomer(user) {
    return this.httpClient.post(this.customer_url, user);
  }

  // Transaction
  public getTransaction() {
    return this.httpClient.get(this.transaction_url);
  }

  public addTransaction(value) {
    return this.httpClient.post(this.transaction_url,value);
  }

  public getSingleTransaction(id) {
    return this.httpClient.get(`${this.transaction_url}/${id}`);
  }

  public deleteTransaction(id) {
    return this.httpClient.delete(`${this.transaction_url}/${id}`);
  }

  public editTransaction(id, value) {
    return this.httpClient.put(`${this.transaction_url}/${id}`, value);
  }

  // Generate Invoice
  public generateInvoice(id) {
    return this.httpClient.get(`${this.invoice_url}/${id}`);
  }

  
}
