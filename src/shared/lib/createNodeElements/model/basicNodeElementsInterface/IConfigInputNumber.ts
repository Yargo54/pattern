export interface IConfigInputNumber {
  className?: string;
  style?: React.CSSProperties;
  step: number;
  min: number;
  decimalSeparator?: string;
  placeholder?: string;
  disabled?: boolean;
}
