import { ClearOutlined } from '@ant-design/icons';

export const defaultConfigResetButton = {
  tooltipTitle: 'Снять фильтры',
  showButton: false,
  disabled: false,
  style: { outline: 'none' },
  icon: <ClearOutlined />,
  onClick: () => alert('Нажал снять фильтры'),
};
