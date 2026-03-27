export default function AppHeader({search, handleSearch, setSearch}) {
    return (
    <header>
      <input type="text" value={search} onChange={setSearch}></input>
      <button onClick={handleSearch} >Cerca</button>
    </header>
    )
}