import PropTypes from 'prop-types'

function ResultMessage({ correct, pokemonName, onNext }) {
    const displayName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)

    return (
        <div className={`result-message ${correct ? 'result-correct' : 'result-wrong'}`}>
            {correct
                ? <p>✅ Correct! It's <strong>{displayName}</strong>!</p>
                : <p>❌ Wrong! It was <strong>{displayName}</strong>.</p>
            }

            <button className="next-btn" onClick={onNext}>
                Next Pokémon →
            </button>
        </div>
    )
}

ResultMessage.propType = {
    correct: PropTypes.bool.isRequired,
    pokemonName: PropTypes.string.isRequired,
    onNext: PropTypes.func.isRequired
}

export default ResultMessage