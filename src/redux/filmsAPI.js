import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_KEY = '9e5cf4f45ae60b7760108794dc459813';
export const filmsAPI = createApi({
    reducerPath: "filmsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
    }),
    endpoints:(builder) =>({
        getMovies:builder.query({
            query: () => "/trending/movie/week?api_key=9e5cf4f45ae60b7760108794dc459813&media_type=movie",
        })
    })
})
export const {
    useGetMoviesQuery
} = filmsAPI