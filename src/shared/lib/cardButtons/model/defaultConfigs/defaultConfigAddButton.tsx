import { PlusOutlined } from '@ant-design/icons';

export const defaultConfigAddButton = {
  tooltipTitle: 'Добавить элемент справочника',
  showButton: false,
  disabled: false,
  style: { outline: 'none' },
  icon: <PlusOutlined />,
  onClick: () => alert('Нажал добавить'),
};
