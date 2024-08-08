import React from 'react';

function FahrenheitInput({ fahrenheit, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter temperature in Fahrenheit:</legend>
            <input
                type="number"
                value={fahrenheit}
                onChange={e => onTemperatureChange(e.target.value, 'F')}
            />
        </fieldset>
    );
}

export default FahrenheitInput;
