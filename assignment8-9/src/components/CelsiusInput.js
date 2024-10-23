import React from 'react';

function CelsiusInput({ celsius, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input
                type="number"
                value={celsius}
                onChange={e => onTemperatureChange(e.target.value, 'C')}
            />
        </fieldset>
    );
}

export default CelsiusInput;