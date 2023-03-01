import {useParams, useNavigate, useLocation} from 'react-router-dom';
import {useGetMovieDetailQuery} from "../redux/filmsAPI";
import Button from '@mui/material/Button';
import {useTranslation} from "react-i18next";
import Container from "@mui/material/Container";


const MovieDetails = () =>{
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const {t} = useTranslation();
    const {
        data: movie = []
        // , isError, isLoading
    } = useGetMovieDetailQuery(movieId);
    const backLinkHref = location?.state?.from ?? '/';
    const imgPath = 'https://image.tmdb.org/t/p/w500';
    const { title, poster_path, overview } = movie;
    return (
        <Container>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <img
                src={`${imgPath}${poster_path}`}
                alt={`Poster to ${title}`}
                height="450px"
                style={{margin: "0 auto", display: "block"}}
            />
            <p style={{textAlign: "center"}}>{overview}</p>
            <Button onClick={() => navigate(backLinkHref)}>{t("Back")}</Button>
        </Container>
    )
}
export default MovieDetails