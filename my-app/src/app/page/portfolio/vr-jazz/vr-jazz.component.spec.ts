import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrJazzComponent } from './vr-jazz.component';

describe('VrJazzComponent', () => {
  let component: VrJazzComponent;
  let fixture: ComponentFixture<VrJazzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrJazzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrJazzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
