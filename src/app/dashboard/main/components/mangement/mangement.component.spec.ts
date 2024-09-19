import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangementComponent } from './mangement.component';

describe('MangementComponent', () => {
  let component: MangementComponent;
  let fixture: ComponentFixture<MangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangementComponent]
    });
    fixture = TestBed.createComponent(MangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
