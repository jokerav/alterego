import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_KEY = '9e5cf4f45ae60b7760108794dc459813';
export const filmsAPI = createApi({
    reducerPath: "filmsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
    }),
    endpoints:(build) =>({
        getTrandingMovies:build.query({
            query: () => `/trending/movie/week?api_key=${API_KEY}&media_type=movie`,
        }),
        getPopularMovies:build.query({
            query:()=>`/movie/popular?api_key=${API_KEY}`,
        })
    })
})
export const {
    useGetTrandingMoviesQuery,
    useGetPopularMoviesQuery
} = filmsAPI