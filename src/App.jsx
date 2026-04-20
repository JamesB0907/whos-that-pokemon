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

  const [ pokemon, setPokemon ] = useState(null);
  const [ choices, setChoices ] = useState([]);
  const [ revealed, setRevealed ] = useState(false);
  const [ selected, setSelected ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ score, setScore ] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    loadNewPokemon()
  }, []);

  async function loadNewPokemon() {
    setLoading(true);
    setRevealed(false);
    setSelected(null);

    const correctId = randomId(TOTAL_POKEMON);

    const wrongId = randomUniqueIds(2, correctId, TOTAL_POKEMON);

    
  }
  
  return <></>
}

export default App
