export default function AppHome({ search, setSearch, handleSearch }) {
    return (
        <main>
            <div className="container text-center text-white">
                <h1 className="title text-white text-center my-5">Benvenuto su BoolFlix, la tua applicazione di ricerca di fiducia.</h1>
                <h2 className="subtitle">Qui potrai cercare tramite il nostro catalogo costantemente aggiornato, i migliori film del momento. Prova tu stesso! </h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                }}>
                    <input type="text"
                        value={search}
                        onChange={setSearch}
                        placeholder="Cosa cerchiamo?..."
                        className="input-field mx-3 my-5">
                    </input>
                    <button onClick={handleSearch}
                        className="btn btn-danger">
                        Cerca
                    </button>
                </form>
            </div>
        </main >
    )
}