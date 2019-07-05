import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinansvestComponent } from './finansvest.component';

describe('FinansvestComponent', () => {
  let component: FinansvestComponent;
  let fixture: ComponentFixture<FinansvestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinansvestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinansvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
