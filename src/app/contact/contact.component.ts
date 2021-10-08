import { Component, OnInit,Injector } from '@angular/core';
import { BaseComponent } from './../lib/base-component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
  }

}
