import { IAddButton } from './buttonsInterfaces/IAddButton';
import { IDownloadButton } from './buttonsInterfaces/IDownloadButton';
import { IReloadButton } from './buttonsInterfaces/IReloadButton';
import { IResetButton } from './buttonsInterfaces/IResetButton';
import { IUploadButton } from './buttonsInterfaces/IUploadButton';

export interface ICardButtons {
  addButtonConfig?: IAddButton;
  downloadButtonConfig?: IDownloadButton;
  uploadButtonConfig?: IUploadButton;
  reloadButtonConfig?: IReloadButton;
  resetButtonConfig?: IResetButton;
}
