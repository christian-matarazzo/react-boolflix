export default function AppHeader({ search, handleSearch, setSearch }) {
    return (
        <div className="container-fluid bg-dark">
            <header className="d-flex align-items-center p-3">
                <a href="" className="text-danger flex-grow-1 h1 text-decoration-none">
                    BoolFlix
                </a>
                <form
                    className="header-form d-flex align-items-center"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSearch();
                    }}>
                    <input
                        placeholder="Cosa cerchiamo?..."
                        className="header-input mx-2"
                        name="header-input"
                        type="text"
                        value={search}
                        onChange={setSearch} 
                    />
                    <button
                        type="submit"
                        className="btn btn-danger px-5">
                        Cerca
                    </button>
                </form>
            </header>
        </div>
    );
}