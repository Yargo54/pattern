import { dictAPI } from './apiServices/apiDict';

export const controller = new AbortController();

class ApiDiContainer {
  static ProxyApiDict = dictAPI;
}

export default ApiDiContainer;
