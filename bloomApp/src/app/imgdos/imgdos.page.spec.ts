import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgdosPage } from './imgdos.page';

describe('ImgdosPage', () => {
  let component: ImgdosPage;
  let fixture: ComponentFixture<ImgdosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgdosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgdosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
