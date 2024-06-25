import { IGetRequestParams } from './model/IGetRequestParams';

export function makeUrlsForDict() {
  return (
    window._env_.DICTAPI_HOST +
    '://' +
    window._env_.DICTAPI_SERVER +
    (window._env_.DICTAPI_PORT?.length > 0 ? ':' + window._env_.DICTAPI_PORT + '/' : '/') +
    (window._env_.DICTAPI_API?.length > 0 ? window._env_.DICTAPI_API + '/' : '')
  );
}

class RestClient {
  static get(values: IGetRequestParams) {
    return {
      method: 'get',
      url: values.endPoint,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authenticatedToken'),
        'Sec-Fetch-Mode': 'no-cors',
      },
      signal: values.controller?.signal,
    };

    // const config: AxiosRequestConfig = {
    //   method: 'get',
    //   url: `${makeUrlsForDict() + values.endPoint}`,
    //   headers: {
    //     Authorization: 'Bearer ' + localStorage.getItem('authenticatedToken'),
    //     'Sec-Fetch-Mode': 'no-cors',
    //   },
    //   signal: values.controller?.signal,
    // };

    // return axios(config);
  }
}

export default RestClient;
