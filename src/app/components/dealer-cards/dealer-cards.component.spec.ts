import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerCardsComponent } from './dealer-cards.component';

describe('DealerCardsComponent', () => {
  let component: DealerCardsComponent;
  let fixture: ComponentFixture<DealerCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
