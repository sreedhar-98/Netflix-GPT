export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const LoginBG = "https://www.okynemedialab.com/wp-content/uploads/2019/11/netflix-background-50-Black-1080x608.jpg"

export const TMDB_APIOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.REACT_APP_TMDB_AccessToken
  }
};

  export const TMDB_NowPlayingMoviesAPI = 'https://api.themoviedb.org/3/movie/now_playing?page=1'
  export const TMDB_PopularMoviesAPI = 'https://api.themoviedb.org/3/movie/popular'
  export const TMDB_TopRatedMoviesAPI = 'https://api.themoviedb.org/3/movie/top_rated'
  export const TMDB_UpcomingMoviesAPI = 'https://api.themoviedb.org/3/movie/upcoming'
  export const TMDB_ImageCDNUrl = 'https://image.tmdb.org/t/p/w780'