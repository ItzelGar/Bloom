import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistrarsePage } from './resgistrarse.page';

describe('ResgistrarsePage', () => {
  let component: ResgistrarsePage;
  let fixture: ComponentFixture<ResgistrarsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgistrarsePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgistrarsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
