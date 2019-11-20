import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgseisPage } from './imgseis.page';

describe('ImgseisPage', () => {
  let component: ImgseisPage;
  let fixture: ComponentFixture<ImgseisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgseisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgseisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
