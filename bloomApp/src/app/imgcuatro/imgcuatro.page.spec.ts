import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcuatroPage } from './imgcuatro.page';

describe('ImgcuatroPage', () => {
  let component: ImgcuatroPage;
  let fixture: ComponentFixture<ImgcuatroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgcuatroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgcuatroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
