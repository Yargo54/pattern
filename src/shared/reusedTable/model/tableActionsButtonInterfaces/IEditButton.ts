export interface IEditButton {
  tooltipTitle?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  onClick?: () => void;
}
