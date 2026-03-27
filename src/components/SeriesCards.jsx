import ReactCountryFlag from 'react-country-flag' /* import ReactCountryFlag to make the flag change dynamically */
export default function SeriesCards({ tvSeries, countryFlag, renderStar, posters }) {
    return (
        <main>
            <div className="container py-5">
                <div className="row row-cols-2 row-cols-lg-4 g-4 justify-content-center">
                    {tvSeries.map(series => (
                        <div className="col" key={series.id}>
                            <div className="card h-100">
                                <img
                                    src={`${posters}${series.poster_path}`}
                                    className="card-img-top"
                                    alt={series.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{series.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        {series.original_name}
                                    </h6>

                                    <div className="d-flex align-items-center">
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