import { UploadChangeParam } from 'antd/es/upload';

export interface IUploadButton {
  tooltipTitle?: string;
  showButton?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  acceptUpload?: string;
  onClick?: () => void;
  onChange?: (data: UploadChangeParam) => void;
}
