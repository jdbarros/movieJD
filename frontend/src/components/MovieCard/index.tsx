import MovieScore from "components/MovieScore"
import { Link } from "react-router-dom";

function MovieCard() {

    const movie = {
        id: 1,
        image: "https://th.bing.com/th/id/R.0e5a3f51cefa35c02827234ae9fee948?rik=iOxY6XonoYTbsA&pid=ImgRaw&r=0",
        title: "Homem Aranha",
        count: 2,
        score: 4.5
    };


    return (
        <>
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div> 
                </Link>

            </div>
        </div>
        <div>
        <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
        <div className="dsmovie-card-bottom-container">
            <h3>{movie.title}</h3>
            <MovieScore />
            <Link to={`/form/${movie.id}`}>
                <div className="btn btn-primary dsmovie-btn">Avaliar</div> 
            </Link>

        </div>
    </div>
    </>
    )
}

export default MovieCard;