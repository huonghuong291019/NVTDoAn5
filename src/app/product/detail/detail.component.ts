import { Component,Injector, OnInit,Renderer2 } from '@angular/core';
import { BaseComponent } from '../../lib/base-component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  extends BaseComponent implements OnInit {

  item:any;
  list_item_same_type:any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this.item = {};
    let id='';
    this._route.params.subscribe(params => {
      id = params['id'];
    });
    this.getByID(id);
  }
  getByID(id){
    this._api.get('/api/item/get-by-id/'+id).takeUntil(this.unsubscribe).subscribe(res => {
    this.item = res;
    this.getByCategory(res.maloai)      
    setTimeout(() => {
        this.loadScripts();
      });
    });
  }
  getByCategory(id){
    this._api.get('/api/item/get-same-item/'+id).takeUntil(this.unsubscribe).subscribe(res => {
    this.list_item_same_type = res;
    setTimeout(() => {
        this.loadScripts();
      });
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
