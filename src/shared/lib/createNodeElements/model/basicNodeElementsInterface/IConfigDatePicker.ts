import { Dayjs } from 'dayjs';

type PanelMode = 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year' | 'decade';
type PickerMode = Exclude<PanelMode, 'datetime' | 'decade'>;

export interface IConfigDatePicker {
  className?: string;
  style?: React.CSSProperties;
  format?: string;
  picker?: PickerMode;
  inputReadOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  suffixIcon?: React.ReactNode;
  onChange?: (date: Dayjs, dateString?: string | string[]) => void;
  disabledDate?: (date: Dayjs) => boolean;
}
