import PropTypes from 'prop-types';

function AnswerButtons({ choices, correctName, selected, revealed, onGeuss }) {

    function getButtonClass(name) {
        if (!revealed) return 'choice-btn'
        if (name === correctName) return 'choice-btn correct'
        if (name === selected) return 'choice-btn wrong'
        return 'choice-btn dimmed'
    }

    return (
        <div className="choices">
            {choices.map(name => (
                <button
                    key={name}
                    className={getButtonClass(name)}
                    onClick={() => onGeuss(name)}
                    disabled={revealed}
                >
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </button>
            ))}
        </div>
    )
}

AnswerButtons.propTypes = {
    choices: PropTypes.arrayOf(PropTypes.string).isRequired,
    correctName: PropTypes.string.isRequired,
    selected: PropTypes.string,
    revealed: PropTypes.bool.isRequired,
    onGuess: PropTypes.func.isRequired
}

export default AnswerButtons