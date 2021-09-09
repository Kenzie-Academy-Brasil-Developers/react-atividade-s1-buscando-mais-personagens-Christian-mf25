import Characters from "./components/Characters"
import { useState, useEffect } from "react"
import "./App.css"

function App() {

  const [characterList, setCharacterList] = useState([])
  const [next, setNext] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${next}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [next])

  const previousPage = () => next >= 0 && setNext(next - 1)

  const nextPage = () => setNext(next + 1)

  return (
    <div className="App">
      <div>
        <h1>Meus personagens</h1>
        <Characters characterList={characterList} />
        <button onClick={previousPage}>Anterior</button>
        <button onClick={nextPage}>Próximo</button>
      </div>
    </div>
  )
}

export default App