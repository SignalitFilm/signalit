import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavForMobileComponent } from './top-nav-for-mobile.component';

describe('TopNavForMobileComponent', () => {
  let component: TopNavForMobileComponent;
  let fixture: ComponentFixture<TopNavForMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavForMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavForMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
