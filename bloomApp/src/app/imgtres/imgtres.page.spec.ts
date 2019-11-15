import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgtresPage } from './imgtres.page';

describe('ImgtresPage', () => {
  let component: ImgtresPage;
  let fixture: ComponentFixture<ImgtresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgtresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgtresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
