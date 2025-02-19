import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a previousPage event when \"Previous page\" is clicked', () => {
    spyOn(component, 'onPrevious').and.callThrough();
    spyOn(component.previousPage, 'emit');
    // First record needs to be greater than 1 to display the "Previous page" link
    component.firstRecord = 2;
    fixture.detectChanges();
    fixture.debugElement.query(By.css('a:first-of-type')).triggerEventHandler('click', null);
    expect(component.onPrevious).toHaveBeenCalled();
    expect(component.previousPage.emit).toHaveBeenCalled();
  });

  it('should emit a nextPage event when \"Next page\" is clicked', () => {
    spyOn(component, 'onNext').and.callThrough();
    spyOn(component.nextPage, 'emit');
    // "More items" needs to be true to display the "Next page" link
    component.moreItems = true;
    fixture.detectChanges();
    fixture.debugElement.query(By.css('a:last-of-type')).triggerEventHandler('click', null);
    expect(component.onNext).toHaveBeenCalled();
    expect(component.nextPage.emit).toHaveBeenCalled();
  });

  it('should not render \"Previous page\" as a hyperlink if first record is less than or equal to 1', () => {
    component.firstRecord = 1;
    fixture.detectChanges();
    const a = fixture.debugElement.query(By.css('a:first-of-type'));
    expect(a).toBeFalsy();
    const span = fixture.debugElement.query(By.css('span:first-of-type'));
    expect(span).toBeTruthy();
  });

  it('should not render \"Next page\" as a hyperlink if \"more items\" is false', () => {
    component.moreItems = false;
    fixture.detectChanges();
    const a = fixture.debugElement.query(By.css('a:last-of-type'));
    expect(a).toBeFalsy();
    const span = fixture.debugElement.query(By.css('span:last-of-type'));
    expect(span).toBeTruthy();
  });
});
