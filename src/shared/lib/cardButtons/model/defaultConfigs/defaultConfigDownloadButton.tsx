import { DownloadOutlined } from '@ant-design/icons';

export const defaultConfigDownloadButton = {
  tooltipTitle: 'Выгрузить',
  showButton: false,
  disabled: false,
  style: undefined,
  icon: <DownloadOutlined />,
  onClick: () => alert('Нажал выгрузить'),
};
