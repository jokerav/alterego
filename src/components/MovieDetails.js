import {useParams, useNavigate, useLocation} from 'react-router-dom';
import {useGetMovieDetailQuery} from "../redux/filmsAPI";
import Button from '@mui/material/Button';


const MovieDetails = () =>{
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const {data:movie = []
        // , isError, isLoading
    } = useGetMovieDetailQuery(movieId);
    const backLinkHref = location?.state?.from ?? '/';
    const imgPath = 'https://image.tmdb.org/t/p/w500';
    const { title, poster_path, overview } = movie;
    return (
        <div>
            <h1>{title}</h1>
            <img
                src={`${imgPath}${poster_path}`}
                alt={`Poster to ${title}`}
                height="450px"
            />
            <p>{overview}</p>
            <Button onClick={()=>navigate(backLinkHref)}>Back</Button>
        </div>
    )
}
export default MovieDetails