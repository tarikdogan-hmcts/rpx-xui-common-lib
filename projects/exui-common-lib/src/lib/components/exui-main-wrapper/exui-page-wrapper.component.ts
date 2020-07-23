import {Component, Input} from '@angular/core';
/**
 * Main Page Wrapper
 * Responsible for:
 * Wrapping content within the gov-uk html elements bellow
 * @prop showBackLink - switch for back link
 * @prop appHeaderTitle = appHeaderTitle
 * @prop appFunctionalTitle = appFunctionalTitle
 * @prop summaryErrors list of errors
 * @prop back link, appHeaderTitle (appHeaderTitle), summaryErrors (array of errors)
 */
@Component({
  selector: 'exui-page-wrapper',
  templateUrl: 'exui-page-wrapper.component.html',
  styleUrls: ['exui-page-wrapper.component.scss']
})
export class ExuiPageWrapperComponent  {

  @Input() public backLink: string;
  @Input() public title: string;
  @Input() public fnTitle: string;

  constructor() { }

}
