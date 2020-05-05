/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Add_commentComponent } from './add_comment.component';

describe('Add_commentComponent', () => {
  let component: Add_commentComponent;
  let fixture: ComponentFixture<Add_commentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add_commentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add_commentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
