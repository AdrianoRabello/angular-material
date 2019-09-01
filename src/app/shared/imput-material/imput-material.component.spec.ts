import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputMaterialComponent } from './imput-material.component';

describe('ImputMaterialComponent', () => {
  let component: ImputMaterialComponent;
  let fixture: ComponentFixture<ImputMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImputMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
