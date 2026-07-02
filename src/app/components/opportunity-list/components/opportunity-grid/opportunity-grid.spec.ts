import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityGrid } from './opportunity-grid';

describe('OpportunityGrid', () => {
  let component: OpportunityGrid;
  let fixture: ComponentFixture<OpportunityGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpportunityGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(OpportunityGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
