import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const token = "5|pPoMkSuhX2E48ek2av465ArANCYjcq7m1IiFSghr" 
export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://10.100.104.110:9002/api/',
    prepareHeaders: (headers) => {
        headers.set("Content-type", 'application/json');
        headers.set("Authorization", `Bearer ${token}`);
        return headers;
      }, 
}),

  endpoints: (builder) => ({

    getData: builder.query({ query: ({url, page}) => {
      console.log(url);
      return url
    } }),

    posterGetData: builder.query({
        query: ({url, page, data}) => {
          console.log(url);
         return ({ url: url, method: 'POST', body: data  })},
        // invalidatesTags: ['Albums'],
    }),
    
    postData: builder.mutation({
      query: ({url, page, data}) => ({ url: url, method: 'POST', body: data  }),
    }),
      
      
  }),
});

export const { useGetDataQuery, usePosterGetDataQuery, usePostDataMutation } = jsonServerApi;