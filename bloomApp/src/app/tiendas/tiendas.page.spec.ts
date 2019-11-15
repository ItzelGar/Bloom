import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendasPage } from './tiendas.page';

describe('TiendasPage', () => {
  let component: TiendasPage;
  let fixture: ComponentFixture<TiendasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
