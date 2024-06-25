export interface IDeleteButton {
  tooltipTitle?: string;
  popconfirmTitle?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  icon?: React.ReactNode;

  onConfirm?: () => void;
}
