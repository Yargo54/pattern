import { UploadOutlined } from '@ant-design/icons';
import { UploadChangeParam, UploadProps } from 'antd/es/upload';

export const propsUpload: UploadProps = {
  maxCount: 1,
  multiple: false,
  showUploadList: false,
};

export const defaultConfigUploadButton = {
  tooltipTitle: 'Снять фильтры',
  acceptUpload: '',
  showButton: false,
  disabled: false,
  style: undefined,
  icon: <UploadOutlined />,
  onClick: () => alert('Нажал снять фильтры'),
  onChange: (data: UploadChangeParam) => alert('Не менняй!' + data),
};
