import { BaseComponent } from './../lib/base-component';
import { Component, OnInit,Injector } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent implements OnInit {
  list_item:any;
  list_item_buy:any;
  list_item_swish:any;
  list: any;
  page: any;
  pageSize: any;
  totalItems:any;
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('/api/item/get-all'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.list_item = res[0];
      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { });
    Observable.combineLatest(
      this._api.get('/api/item/get-buy'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.list_item_buy = res[0];
      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { });
    Observable.combineLatest(
      this._api.get('/api/item/get-swish'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.list_item_swish= res[0];
      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { });
  }
  swish(it)
  {
    this._api.get('/api/item/get-by-id-swish/'+ it.macaycanh).takeUntil(this.unsubscribe).subscribe((res:any) => {
      alert('Đã thích sản phẩm !'); 
      }); 
  }
  addToCart(it) { 
    this._cart.addToCart(it);
    alert('Thêm giỏ hàng thành công !'); 
  }
  
} 