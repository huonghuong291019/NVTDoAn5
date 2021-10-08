import { BaseComponent } from '../../lib/base-component';
import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends BaseComponent implements OnInit {
  items:any;
  total:any;
  quanti:any;
  constructor(injector: Injector,private router: Router,) { 
    super(injector);
  }

  ngOnInit(): void {
    this._cart.items.subscribe((res) => {
      this.items = res;
      this.total = 0;
      for(let x of this.items){ 
        x.money = x.quantity * x.gia;
        this.total += x.quantity * x.gia;
      } 
    });
    this._cart.items.subscribe((res) => {
      this.quanti = res? res.length:0;
    });
  } 
  
  clearCart() { 
    this._cart.clearCart();
    location.reload();
    alert('Xóa giỏ hàng thành công');
  }
  addQty(item, quantity){ 
    item.quantity=quantity ;
    item.money =  Number.parseInt(item.quantity) *  item.gia;
    this._cart.addQty(item);
  }
}