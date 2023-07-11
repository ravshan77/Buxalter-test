import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constants';

const token = JSON.parse(sessionStorage.getItem("user"))?.token;

export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
        headers.set("Content-type", 'application/json');
        headers.set("Authorization", `Bearer ${token}`);
        return headers;
      }, 
}),

  endpoints: (builder) => ({

    getData: builder.query({ query: ({url, page}) => {
      return url
    } }),

    posterGetData: builder.query({
        query: ({url, page, data}) => {
         return ({ url: url, method: 'POST', body: data  })},
        // invalidatesTags: ['Albums'],
    }),
    
    postData: builder.mutation({
      query: ({url, page, data}) => ({ url: url, method: 'POST', body: data  }),
    }),
      
      
  }),
});

export const { useGetDataQuery, usePosterGetDataQuery, usePostDataMutation } = jsonServerApi;