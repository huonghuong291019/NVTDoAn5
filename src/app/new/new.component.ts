import { Component, OnInit,Injector } from '@angular/core';
import { BaseComponent } from './../lib/base-component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
  }

}
