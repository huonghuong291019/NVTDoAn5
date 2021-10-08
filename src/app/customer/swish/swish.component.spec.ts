import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwishComponent } from './swish.component';

describe('SwishComponent', () => {
  let component: SwishComponent;
  let fixture: ComponentFixture<SwishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
