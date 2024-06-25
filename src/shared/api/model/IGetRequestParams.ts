import { controller } from '../apiDiContainer';

export interface IGetRequestParams {
  endPoint: string;
  controller: typeof controller;
}
