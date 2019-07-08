import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvakuatorComponent } from './evakuator.component';

describe('EvakuatorComponent', () => {
  let component: EvakuatorComponent;
  let fixture: ComponentFixture<EvakuatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvakuatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvakuatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
