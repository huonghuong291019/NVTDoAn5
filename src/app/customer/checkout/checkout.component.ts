  
import { BaseComponent } from './../../lib/base-component';
import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends BaseComponent implements OnInit {
  items:any;
  total:any;
  submitForm = false;
  public hoadonForm: FormGroup;
  constructor(private router: Router, injector: Injector) { 
    super(injector);
  }

  onSubmit(value: any) {
    this.submitForm = true;
    
    let hoadon = { hoten: value.hoten,
       diachigh:value.diachigh,
       sdtgh:value.sdtgh,
       listjson_chitiet:this.items};
       if (this.hoadonForm.valid) {
    this._api.post('/api/hoadon/create-hoa-don', hoadon).takeUntil(this.unsubscribe).subscribe(res => {
      this.submitForm = false;
      alert('Thanh toán thành công');
      this._cart.clearCart();
      this.router.navigate(['/home']);
       }, err => { });      
      }
  }

  ngOnInit(): void {
    this.hoadonForm = new FormGroup({
      hoten: new FormControl('',[ 
      Validators.required,
      Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/)
      ]),
      diachigh: new FormControl('', 
      [
        Validators.required
      ]),
      sdtgh: new FormControl('', 
      [
        Validators.required,
        Validators.pattern(/((09|03|07|08|05)+([0-9]{8})\b)/g)
      ]),
     
    });
    this._cart.items.subscribe((res) => {
      this.items = res;
      this.total = 0;
      for(let x of this.items){ 
        x.soluong = +x.quantity;
        x.dongia=x.gia;
        x.money = x.quantity * x.gia;
        this.total += x.quantity * x.gia;
      } 
    });

  }
  public errorHandlingAddForm = (control: string, error: string) => {
    return this.submitForm && this.hoadonForm.controls[control].hasError(error);
  };
}