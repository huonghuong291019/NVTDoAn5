import { BaseComponent } from '../../lib/base-component';
import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-swish',
  templateUrl: './swish.component.html',
  styleUrls: ['./swish.component.css']
})
export class SwishComponent extends BaseComponent implements OnInit {
  items:any;
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    this._api.get('/api/item/get-data-swish').takeUntil(this.unsubscribe).subscribe(res => {
      this.items = res;
    }); 
  } 
  addToCart(c) { 
    this._cart.addToCart(c);
    alert('Thêm giỏ hàng thành công!'); 
  }
}