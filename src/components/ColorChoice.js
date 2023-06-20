import PropTypes from 'prop-types';

const ColorChoice = (props) => {
    return(
        <section>
            <button onClick={() => props.setColor('red')}>🔴</button>
            <button onClick={() => props.setColor('orange')}>🟠</button>
            <button onClick={() => props.setColor('yellow')}>🟡</button>
            <button onClick={() => props.setColor('green')}>🟢</button>
            <button onClick={() => props.setColor('blue')}>🔵</button>
            <button onClick={() => props.setColor('purple')}>🟣</button>
        </section>
    )
};

ColorChoice.prototype = {
    setColor: PropTypes.func
};

export default ColorChoice;