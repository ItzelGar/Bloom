import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeseosPage } from './deseos.page';

describe('DeseosPage', () => {
  let component: DeseosPage;
  let fixture: ComponentFixture<DeseosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeseosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeseosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
