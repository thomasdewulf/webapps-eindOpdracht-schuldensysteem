import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtDetailComponent } from './debt-detail.component';

describe('DebtDetailComponentComponent', () => {
  let component: DebtDetailComponent;
  let fixture: ComponentFixture<DebtDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
