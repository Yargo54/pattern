export type SelectOption = { label: string; value: string | number | boolean };
type SelectValue = string | number | boolean;

export interface IConfigSelect {
  className?: string;
  style?: React.CSSProperties;
  allowClear?: boolean;
  showSearch?: boolean;
  mode?: 'multiple' | 'tags';
  maxTagCount?: number | 'responsive';
  disabled?: boolean;
  showArrow?: boolean;
  placeholder?: string;
  options?: SelectOption[];
  filterOption?: (inputValue: string, option?: SelectOption) => boolean | boolean;
  onSelect?: (value: SelectValue, option: SelectOption) => void;
  onClear?: () => void;
  dropdownRender?: (menu: React.ReactElement) => React.ReactElement;
  dropdownMatchSelectWidth?: boolean | number;
}
