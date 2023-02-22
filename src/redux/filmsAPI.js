import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const API_KEY = '9e5cf4f45ae60b7760108794dc459813';
export const filmsAPI = createApi({
    reducerPath: "filmsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
    }),
    endpoints:(build) =>({
        getTopRatedMovies:build.query({
            query: (page) => `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
        }),
        getPopularMovies:build.query({
            query:(page) =>`/movie/popular?api_key=${API_KEY}&page=${page}`,
        }),
        getMovieDetail:build.query({
            query: movieId=> `movie/${movieId}?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US`
        })
    })
})
export const {
    useGetTopRatedMoviesQuery,
    useGetPopularMoviesQuery,
    useGetMovieDetailQuery
} = filmsAPI