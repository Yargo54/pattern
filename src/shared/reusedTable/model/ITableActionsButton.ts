import { IDeleteButton } from './tableActionsButtonInterfaces/IDeleteButton';
import { IDownloadButton } from './tableActionsButtonInterfaces/IDownloadButton';
import { IEditButton } from './tableActionsButtonInterfaces/IEditButton';
import { IViewButton } from './tableActionsButtonInterfaces/IViewButton';

export interface ITableActionsButton {
  viewButtonConfig?: IViewButton;
  editButtonConfig?: IEditButton;
  deleteButtonConfig?: IDeleteButton;
  downloadButtonConfig?: IDownloadButton;
}
