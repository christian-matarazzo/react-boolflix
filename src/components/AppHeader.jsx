export default function AppHeader({ search, handleSearch, setSearch }) {
    return (

        <div className="container-fluid bg-dark">
            <header className="d-flex  align-items-center p-3">
                <a href="#" className="text-danger flex-grow-1 h1 text-decoration-none">BoolFlix</a>
                <input className="mx-5" type="text" value={search} onChange={setSearch}></input>
                <button className="btn btn-danger px-5" onClick={handleSearch} >Cerca</button>
            </header>
        </div>
    )
}