export interface IDownloadButton {
  tooltipTitle?: string;
  showButton?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  onClick?: () => void;
}
