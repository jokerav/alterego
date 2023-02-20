import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const fakeNewsAPI = createApi({
    reducerPath: 'fakeNewsAPI',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com/',
    }),
    tagTypes:['news'],
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ()=>'/posts',
            method: "GET",
            providesTags: ['news'],
        })
    })
})
export const {
    useGetNewsQuery
} = fakeNewsAPI