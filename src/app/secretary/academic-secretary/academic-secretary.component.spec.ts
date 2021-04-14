import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicSecretaryComponent } from './academic-secretary.component';

describe('AcademicSecretaryComponent', () => {
  let component: AcademicSecretaryComponent;
  let fixture: ComponentFixture<AcademicSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicSecretaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
