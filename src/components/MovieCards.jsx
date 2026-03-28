import ReactCountryFlag from 'react-country-flag' /* import ReactCountryFlag to make the flag change dynamically */
export default function MovieCards({ movies, countryFlag, renderStar, posters }) {
    return (
        <main>
            <div className="container py-5">
                <div className="row row-cols-2 row-cols-lg-4 g-4 justify-content-center">  
                    {movies.map(movie => ( 
                        <div className="col" key={movie.id}>
                            <div className="card h-100 movie-card">
                                <img 
                                    src= {`${posters}${movie.poster_path}`}
                                    className="card-img"
                                    alt={movie.title}
                                />
                                <div className="card-img-overlay movie-overlay d-flex flex-column justify-content-center text-center">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <h6 className="card-subtitle mb-2">
                                        {movie.overview}
                                    </h6>
                                     <h6 className="card-info mb-2">
                                        {movie.original_title}
                                    </h6>
                                    
                                    <div className="d-flex align-items-center justify-content-center">
                                        <ReactCountryFlag 
                                            countryCode={countryFlag(movie.original_language)}
                                            svg
                                            title={movie.original_language.toUpperCase()} 
                                        />
                                        <span className="ms-2">
                                            {movie.original_language.toUpperCase()}
                                        </span>
                                    </div>

                                    <div className="mt-2">
                                        {renderStar(movie.vote_average)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))} 

                </div> 
            </div> 
        </main>
    );
}
