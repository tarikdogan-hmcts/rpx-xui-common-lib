import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GovUkCheckboxComponent } from './gov-uk-checkbox.component';
import { By } from '@angular/platform-browser';

describe('GovUkCheckboxComponent', () => {
  let component: GovUkCheckboxComponent;
  let fixture: ComponentFixture<GovUkCheckboxComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ GovUkCheckboxComponent ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovUkCheckboxComponent);
    component = fixture.componentInstance;
    component.group = formBuilder.group({ checkbox: null});
    component.config = {value: 'checkbox', label: 'checkbox', hint: 'hint', name: 'checkbox', focusOn: 'checkbox', id: 'id', classes: ''};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have input element', () => {
    const input = fixture.debugElement.query(By.css('input'));
    expect(input).toBeTruthy();
  });

});
