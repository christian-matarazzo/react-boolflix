import ReactCountryFlag from 'react-country-flag' /* import ReactCountryFlag to make the flag change dynamically */
export default function SeriesCards({ tvSeries, countryFlag, renderStar, posters }) {
    return (
<main>
    <div className="container py-5">
        <div className="row row-cols-2 row-cols-lg-4 g-4 justify-content-center">
            {tvSeries.map(series => (
                <div className="col" key={series.id}>
                    <div className="card series-card h-100">
                        <img
                            src={`${posters}${series.poster_path}` }
                            className="card-img" 
                            alt={series.name}
                        />
                        <div className="card-img-overlay series-overlay d-flex flex-column justify-content-center text-center">
                            <h5 className="card-title">{series.name}</h5>
                            <p className="card-text small">
                                {series.overview }
                            </p>
                            
                            <div className="d-flex align-items-center justify-content-center">
                                <ReactCountryFlag
                                    countryCode={countryFlag(series.original_language)}
                                    svg
                                    title={series.original_language.toUpperCase()}
                                />
                                <span className="ms-2">
                                    {series.original_language.toUpperCase()}
                                </span>
                            </div>
                            <div className="mt-2">
                                {renderStar(series.vote_average)}
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