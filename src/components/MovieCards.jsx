import ReactCountryFlag from 'react-country-flag' /* import ReactCountryFlag to make the flag change dynamically */



export default function MovieCards({movies, countryFlag, renderStar, posters}) {
    return (
                <div className="row">
                  {movies.map(movie => (
                    <ul key={movie.id}>
                      <li>{movie.title}</li>
                      <li>{movie.original_title}</li>
                      <li> <ReactCountryFlag   /* ReactCountryFlag for render flags */
                        countryCode={countryFlag(movie.original_language)}
                        svg
                        title={movie.original_language.toUpperCase()}
                      />{' '}
                        {movie.original_language.toUpperCase()}</li>
                      <li>
                        {renderStar(movie.vote_average)}
                      </li>
                      <li><img src={`${posters}${movie.poster_path}`} alt="wewe" /></li> {/* join url with the fetch img */}
                    </ul>
                  ))}
                  {/* map movies end */}
                </div>
    )
}