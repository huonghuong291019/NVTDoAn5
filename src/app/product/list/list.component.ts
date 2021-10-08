import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../lib/base-component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent implements OnInit {
  list: any;
  page: any;
  pageSize: any;
  totalItems:any;
  maloai:any;
  menus:any;
  total:any;
  items:any;
  item:any;
  money:any;
  name:any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this.list = [];
    this.page = 1;
    this.pageSize = 5;
    this.item = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/itemgroup/get-by-id/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.item = res;
        this.maloai = params['id'];
        this._api.post('/api/item/search', { page: this.page, pageSize: this.pageSize, maloai: this.maloai}).takeUntil(this.unsubscribe).subscribe(res => {
          this.list = res.data;
          this.totalItems = res.totalItems;
          }
          , err => { }); 
      }); 
    });   
   this._api.get('/api/itemgroup/get-menu').takeUntil(this.unsubscribe).subscribe(res => {
    this.menus = res;
  }); 
 
  }
  loadPage(page) { 
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.post('/api/item/search', { page: page, pageSize: this.pageSize, maloai: id}).takeUntil(this.unsubscribe).subscribe(res => {
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
    alert('Thêm giỏ hàng thành công !'); 
  }
}