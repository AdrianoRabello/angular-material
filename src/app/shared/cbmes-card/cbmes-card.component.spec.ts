import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbmesCardComponent } from './cbmes-card.component';

describe('CbmesCardComponent', () => {
  let component: CbmesCardComponent;
  let fixture: ComponentFixture<CbmesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbmesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbmesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
