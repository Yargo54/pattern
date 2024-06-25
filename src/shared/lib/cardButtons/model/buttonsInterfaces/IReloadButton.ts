export interface IReloadButton {
  spinStatus?: boolean;
  tooltipTitle?: string;
  showButton?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  onClick?: () => void;
}
