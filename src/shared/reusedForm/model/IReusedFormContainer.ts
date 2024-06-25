import { Rule } from 'antd/es/form';
import { FormInstance, FormProps } from 'antd/es/form/Form';

export interface FormItemsCaracteristic {
  name: string;
  label: string;
  value?: string | number | null | undefined;
  rules?: Rule[];
}

export type FieldType = {
  [key: string]: string | number | boolean | null | undefined;
};

export interface IReusedFormContainer {
  antFormProps?: FormProps;
  form: FormInstance;
}
