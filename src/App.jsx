
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import axios from 'axios'

function App() {
const api_key = import.meta.env.VITE_API_KEY

const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=ritorno+al+futuro`


  return (
    <>
      
    </>
  )
}

export default App
