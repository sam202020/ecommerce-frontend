import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperHomeComponent } from './shopper-home.component';

describe('ShopperHomeComponent', () => {
  let component: ShopperHomeComponent;
  let fixture: ComponentFixture<ShopperHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopperHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopperHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
