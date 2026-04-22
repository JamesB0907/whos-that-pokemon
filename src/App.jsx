import { useEffect, useState } from 'react';
import './App.css'

// TODO: Child components: PokemonImage, AnswerButton, ResultMessage

const TOTAL_POKEMON = 898;

function randomId(max) {
  return Math.floor(Math.random() * max) + 1;
}

function randomUniqueIds(count, exclude, max) {
  const ids = new Set()
  while (ids.size < count) {
    const id = randomId(max);
    if (id !== exclude) ids.add(id);
  }
  return [...ids];
}

function App() {

  const [pokemon, setPokemon] = useState(null);
  const [choices, setChoices] = useState([]);
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    loadNewPokemon()
  }, []);

  async function loadNewPokemon() {
    setLoading(true);
    setRevealed(false);
    setSelected(null);

    const correctId = randomId(TOTAL_POKEMON);

    const wrongIds = randomUniqueIds(2, correctId, TOTAL_POKEMON);

    const correctRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${correctId}`);
    const correctData = await correctRes.json();

    const wrongFetches = wrongIds.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json()))
    const wrongData = await Promise.all(wrongFetches)

    const correctPokemon = {
      id: correctData.id,
      name: correctData.name,
      image: correctData.sprites.other['official-artwork'].front_default,
    }

    const allNames = [
      correctPokemon.name,
      ...wrongData.map(d => d.name),
    ]

    allNames.sort(() => Math.random() - 0.5)

    setPokemon(correctPokemon)
    setChoices(allNames)
    setLoading(false)
  }

  function handleGuess(name) {
    if (revealed) return

    setSelected(name)
    setRevealed(true)

    setScore(prev => ({
      correct: prev.correct + (name === pokemon.name ? 1 : 0),
      total: prev.total + 1,
    }))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Who's That Pokémon</h1>
        <p className="score">Score: {score.correct} / {score.total}</p>
      </header>

      <main className="game-area">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <>
            {/*TODO: Add PokeImage, AnswerButton, ResultMessage component*/}
          </>
        )
      }
      </main>
    </div>
  )
}

export default App
