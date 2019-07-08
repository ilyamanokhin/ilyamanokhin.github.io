import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanfossComponent } from './danfoss.component';

describe('DanfossComponent', () => {
  let component: DanfossComponent;
  let fixture: ComponentFixture<DanfossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanfossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanfossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
