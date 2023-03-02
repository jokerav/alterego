export const getLoggedIn = state => state.auth.isLoggedin
export const getPopularPage = state => state.pagesSlice.popularPage
export const getTopRatedPage = state => state.pagesSlice.topRatedPage
export const getFavorite = state => state.auth.favorite
// export const getLang = state => state.auth.lang