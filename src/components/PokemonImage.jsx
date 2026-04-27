import PropTypes from 'prop-types';

function PokemonImage({ src, name, revealed }) {
    return (
        <div className="pokemon-image-wrapper">
            <img 
                src={src}
                alt={revealed ? name : 'mystery pokemon'}
                className={`pokemon-image${revealed ? '' : ' silhouette'}`}
            />
        </div>
    )
}

PokemonImage.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    revealed: PropTypes.bool.isRequired,
}

export default PokemonImage