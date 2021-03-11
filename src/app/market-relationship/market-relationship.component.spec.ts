import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketRelationshipComponent } from './market-relationship.component';

describe('MarketRelationshipComponent', () => {
  let component: MarketRelationshipComponent;
  let fixture: ComponentFixture<MarketRelationshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketRelationshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
