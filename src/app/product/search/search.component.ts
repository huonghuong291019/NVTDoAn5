import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../lib/base-component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends BaseComponent implements OnInit {
  list: any;
  page: any;
  pageSize: any;
  totalItems:any;
  item_name:any;
  menus:any;
  total:any;
  items:any;
  money:any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this.list = [];
    this.page = 1;
    this.pageSize = 5;
    this._route.params.subscribe(params => {
      this.item_name = params['tk'];
      this._api.post('/api/item/searchnamehome', { page: this.page, pageSize: this.pageSize, tencaycanh: this.item_name}).takeUntil(this.unsubscribe).subscribe(res => {
        this.list = res.data;
        console.log(this.list);
        this.totalItems = res.totalItems;
        }, err => { });       
   });   
   this._api.get('/api/itemgroup/get-menu').takeUntil(this.unsubscribe).subscribe(res => {
    this.menus = res;
  }); 
  this._cart.items.subscribe((res) => {
    this.total = res? res.length:0;
  });
  this._cart.items.subscribe((res) => {
    this.items = res;
    this.money = 0;
    for(let x of this.items){ 
      x.moneysum = x.quantity * x.gia;
      this.money += x.quantity * x.gia;
    } 
  });
  }
  loadPage(page) { 
    this._route.params.subscribe(params => {
      let id = params['tk'];
      this._api.post('/api/item/searchnamehome', { page: page, pageSize: this.pageSize, tencaycanh: id}).takeUntil(this.unsubscribe).subscribe(res => {
        this.list = res.data;
        this.totalItems = res.totalItems;
        }, err => { });       
   });   
  }
  swish(it)
  {
    this._api.get('/api/item/get-by-id-swish/'+ it.macaycanh).takeUntil(this.unsubscribe).subscribe((res:any) => {
      alert('Đã thích sản phẩm !'); 
      }); 
  }
  addToCart(it) { 
    this._cart.addToCart(it);
    alert('Thêm giỏ hàng thành công!'); 
  }
   
}