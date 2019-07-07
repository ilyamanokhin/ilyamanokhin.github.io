import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObedMasterComponent } from './obed-master.component';

describe('ObedMasterComponent', () => {
  let component: ObedMasterComponent;
  let fixture: ComponentFixture<ObedMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObedMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObedMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
