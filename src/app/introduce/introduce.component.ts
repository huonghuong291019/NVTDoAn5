import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from './../lib/base-component';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
  }

}
