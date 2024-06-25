import { Checkbox, DatePicker, Input, InputNumber, Select, Table } from 'antd';
import { IConfigElem } from './model/IConfigElem';
import { CalendarOutlined } from '@ant-design/icons';
import { defaultPagination } from './model/basicNodeElementsInterface/IConfigTable';

const createNodeElements: React.FC = (configElem: IConfigElem) => {
  switch (configElem.type) {
    case 'inputTextArea':
      return (
        <Input.TextArea
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
          className={`${
            (configElem.inputTextArea?.className && configElem.inputTextArea?.className) || ''
          }`}
          style={configElem.inputTextArea?.style}
          disabled={configElem.inputTextArea?.disabled ?? false}
          autoSize={configElem.inputTextArea?.autoSize ?? true}
          placeholder={configElem.inputTextArea?.placeholder ?? 'Введите значение'}
        />
      );
    case 'inputNumber':
      return (
        <InputNumber
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
          className={`inputNumberStyle ${
            (configElem.inputNumber?.className && configElem.inputNumber?.className) || ''
          }`}
          style={configElem.inputNumber?.style ?? undefined}
          step={configElem.inputNumber?.step ?? 1}
          min={configElem.inputNumber?.min ?? 0}
          decimalSeparator={configElem.inputNumber?.decimalSeparator ?? ','}
          placeholder={configElem.inputNumber?.placeholder ?? 'Введите значение'}
          disabled={configElem.inputNumber?.disabled ?? false}
        />
      );
    case 'select':
      return (
        <Select
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
          className={`${(configElem.select?.className && configElem.select?.className) || ''}`}
          style={configElem.select?.style ?? undefined}
          allowClear={configElem.select?.allowClear ?? true}
          showSearch={configElem.select?.showSearch ?? true}
          showArrow={configElem.select?.showArrow ?? true}
          mode={configElem.select?.mode ?? undefined}
          maxTagCount={configElem.select?.maxTagCount ?? undefined}
          disabled={configElem.select?.disabled ?? false}
          placeholder={configElem.select?.placeholder ?? 'Выберите значение'}
          options={configElem.select?.options ?? []}
          filterOption={
            configElem.select?.filterOption
              ? configElem.select?.filterOption
              : (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          onSelect={configElem.select?.onSelect ?? undefined}
          onClear={configElem.select?.onClear ?? undefined}
          dropdownRender={configElem.select?.dropdownRender ?? undefined}
          dropdownMatchSelectWidth={configElem.select?.dropdownMatchSelectWidth ?? 500}
        />
      );
    case 'datePicker':
      return (
        <DatePicker
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
          className={`datePickerStyle${
            (configElem.datePicker?.className && configElem.datePicker?.className) || ''
          }`}
          style={configElem.datePicker?.style ?? undefined}
          format={configElem.datePicker?.format ?? 'DD.MM.YYYY'}
          picker={configElem.datePicker?.picker ?? 'date'}
          inputReadOnly={configElem.datePicker?.inputReadOnly ?? true}
          disabled={configElem.datePicker?.disabled ?? false}
          disabledDate={configElem.datePicker?.disabledDate ?? undefined}
          placeholder={configElem.datePicker?.placeholder ?? 'Выберите дату'}
          onChange={configElem.datePicker?.onChange ?? undefined}
          suffixIcon={configElem.datePicker?.suffixIcon ?? <CalendarOutlined />}
        />
      );
    case 'checkBox':
      return (
        <Checkbox
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
          className={`checkBoxStyle ${
            (configElem.checkBox?.className && configElem.checkBox?.className) || ''
          }`}
          style={configElem.checkBox?.style ?? undefined}
          disabled={configElem.checkBox?.disabled ?? false}
        >
          {configElem.checkBox?.children ? (
            configElem.checkBox?.children
          ) : (
            <span>{configElem.checkBox?.defaultCheckBoxText}</span>
          )}
        </Checkbox>
      );
    case 'table':
      return (
        <Table
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
          className={`${(configElem.table?.className && configElem.table?.className) || ''}`}
          bordered={configElem.table?.bordered ?? true}
          dataSource={configElem.table?.dataSource ?? []}
          columns={configElem.table?.columns ?? []}
          pagination={configElem.table?.pagination ?? defaultPagination}
        />
      );
    default:
      break;
  }
};

export default createNodeElements;
