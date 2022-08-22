import { useEffect, useState } from 'react'
import Character from './Character'

const NavPage = ({ page, setPage }) => {
  return (
    <div>
      <p>Page: {page} </p>
      <button
        onClick={() => setPage(page + 1)}
      >
        Page {page + 1}
      </button>
    </div>
  )
}

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData () {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await response.json()
      setLoading(false)
      setCharacters(data.results)
    }
    fetchData()
  }, [page])

  return (
    <>
      <NavPage page={page} setPage={setPage} />
      {
        loading
          ? (
            <h1>Loading..</h1>
            )
          : (
            <div>
              {characters.map(character => (
                <Character key={character.id} character={character} />
              ))}
            </div>
            )
      }
      <NavPage page={page} setPage={setPage} />
    </>
  )
}

export default CharacterList
