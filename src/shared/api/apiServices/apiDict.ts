// import { IGetRequestParams } from '../model/IGetRequestParams';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ApiConnector from '../restClient';
import { IGetRequestParams } from '../model/IGetRequestParams';

export const dictAPI = createApi({
  reducerPath: 'dictAPI',
  // baseQuery: fetchBaseQuery({ baseUrl: makeUrlsForDict() }),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Events'],
  endpoints: (build) => ({
    getDictItems: build.query<[], IGetRequestParams>({
      query: (values) => ApiConnector.get(values),
      // queryFn: async (values) => await ApiConnector.get(values),
    }),
  }),
});
