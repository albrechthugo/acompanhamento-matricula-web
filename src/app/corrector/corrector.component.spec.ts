import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectorComponent } from './corrector.component';

describe('CorrectorComponent', () => {
  let component: CorrectorComponent;
  let fixture: ComponentFixture<CorrectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
