import { FormItemsCaracteristic } from '../../../reusedForm/model/IReusedFormContainer';
import { IConfigCheckBox } from './basicNodeElementsInterface/IConfigCheckBox';
import { IConfigDatePicker } from './basicNodeElementsInterface/IConfigDatePicker';
import { IConfigInputNumber } from './basicNodeElementsInterface/IConfigInputNumber';
import { IConfigInputTextArea } from './basicNodeElementsInterface/IConfigInputTextArea';
import { IConfigSelect } from './basicNodeElementsInterface/IConfigSelect';
import { IConfigTable } from './basicNodeElementsInterface/IConfigTable';

type ConfigElemType =
  | 'inputTextArea'
  | 'inputNumber'
  | 'select'
  | 'datePicker'
  | 'checkBox'
  | 'table';

export interface IConfigElem {
  type?: ConfigElemType;
  formItemProps?: FormItemsCaracteristic;
  inputTextArea?: IConfigInputTextArea;
  inputNumber?: IConfigInputNumber;
  datePicker?: IConfigDatePicker;
  select?: IConfigSelect;
  checkBox?: IConfigCheckBox;
  table?: IConfigTable;
}
