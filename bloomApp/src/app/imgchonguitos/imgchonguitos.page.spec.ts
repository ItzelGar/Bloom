import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgchonguitosPage } from './imgchonguitos.page';

describe('ImgchonguitosPage', () => {
  let component: ImgchonguitosPage;
  let fixture: ComponentFixture<ImgchonguitosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgchonguitosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgchonguitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
