export type FilterFieldType = 'checkbox' | 'radio' | 'select' | 'find-person';

export type FilterPersistence = 'local' | 'session' | 'memory';

export interface FilterConfig {
  id: string;
  fields: FilterFieldConfig[];
  persistence: FilterPersistence;
  applyButtonText: string;
  cancelButtonText: string;
  cancelSetting?: FilterSetting;
  enableDisabledButton?: boolean;
}

export interface FilterFieldConfig {
  name: string;
  options: { key: string, label: string, selectAll?: true }[];
  minSelected: number;
  maxSelected: number;
  minSelectedError?: string;
  maxSelectedError?: string;
  displayMaxSelectedError?: boolean;
  displayMinSelectedError?: boolean;
  lineBreakBefore?: boolean;
  showCondition?: string;
  enableCondition?: string;
  findPersonField?: string;
  disabledText?: string;
  type: FilterFieldType;
  domain?: string;
  title?: string;
  subTitle?: string;
}

export interface FilterSetting {
  id: string;
  fields: { name: string, value: string[] }[];
}

export class RadioFilterFieldConfig implements FilterFieldConfig {
  public name: string;
  public options: { key: string, label: string}[];
  public minSelected: 1;
  public maxSelected: 1;
  public type: 'radio';
}
