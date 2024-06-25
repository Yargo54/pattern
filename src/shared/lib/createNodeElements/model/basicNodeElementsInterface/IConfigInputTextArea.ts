type AutoSizeType = {
  minRows?: number;
  maxRows?: number;
};

export interface IConfigInputTextArea {
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  autoSize?: boolean | AutoSizeType;
  placeholder?: string;
}
