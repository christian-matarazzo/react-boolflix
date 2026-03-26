
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import axios from 'axios'
import { use, useState } from 'react'

function App() {

  /* useState for the input search */
  const [search, setSearch] = useState("")
  /* useState for store API data */
  const [movies, setMovies] = useState([])

  const handleSearch = () => {
    axios.get(apiUrl)
      .then(res => { setMovies(res.data.results) })

  }

  const api_key = import.meta.env.VITE_API_KEY
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* input camp where i can get by onChange user writing with setSearch and target value */}
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            {/* button to trigger the handleSearch for get the API call */}
            <button onClick={handleSearch} >Cerca</button>

          </div>
        </div>
        {/* make a new row to map the handleSearch */}
        <div className="row">
          {/* map movies */}
          {movies.map(movie => (
            /* use the value we need to render from the movies map */
            <ul key={movie.id}>
              <li>{movie.title}</li>
              <li>{movie.original_title}</li>
              <li>{movie.original_language}</li>
              <li>{movie.vote_average}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
