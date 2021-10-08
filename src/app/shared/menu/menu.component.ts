import { Component, OnInit ,Injector} from '@angular/core';
import { BaseComponent } from '../../lib/base-component';
import { Router } from '@angular/router';
import 'rxjs/add/operator/takeUntil';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent implements OnInit {
  menus:any;
  total:any;
  items:any;
  money:any;
  constructor( injector: Injector,private _rou: Router) {
    super(injector);
  }
  ngOnInit(): void {
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
  search(timkiem){
    this._rou.navigate(["/product/search",timkiem]);
  }
}
