import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgsietePage } from './imgsiete.page';

describe('ImgsietePage', () => {
  let component: ImgsietePage;
  let fixture: ComponentFixture<ImgsietePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgsietePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgsietePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
