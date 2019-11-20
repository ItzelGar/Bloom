import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcincoPage } from './imgcinco.page';

describe('ImgcincoPage', () => {
  let component: ImgcincoPage;
  let fixture: ComponentFixture<ImgcincoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgcincoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgcincoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
