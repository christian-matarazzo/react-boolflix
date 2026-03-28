export default function AppHome({ search, setSearch, handleSearch }) {
    return (
        <main>
            <div className="container text-center text-white">
                {search === "" ?
                 (
                     <>
                        <h1 className="title text-white text-center my-5">Benvenuto su BoolFlix, la tua applicazione di ricerca di fiducia.</h1>
                        <h2 className="subtitle">Qui potrai cercare tramite il nostro catalogo costantemente aggiornato, i migliori film del momento. Prova tu stesso! </h2>
                    </>) 
                    
                : (
                        <h2 className="searching-text my-5">Stai cercando...</h2>
                )}

            </div>
        </main >
    )
}