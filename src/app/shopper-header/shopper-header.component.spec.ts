import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperHeaderComponent } from './shopper-header.component';

describe('ShopperHeaderComponent', () => {
  let component: ShopperHeaderComponent;
  let fixture: ComponentFixture<ShopperHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopperHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopperHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
