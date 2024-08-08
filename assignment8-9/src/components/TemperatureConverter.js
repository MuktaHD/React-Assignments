import React, { useState } from 'react';
import CelsiusInput from './CelsiusInput';
import FahrenheitInput from './FahrenheitInput';

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function TemperatureConverter() {
    const [temperature, setTemperature] = useState({ value: '', scale: 'C' });

    const handleTemperatureChange = (value, scale) => {
        setTemperature({ value, scale });
    };

    const celsius = temperature.scale === 'F' ? toCelsius(temperature.value) : temperature.value;
    const fahrenheit = temperature.scale === 'C' ? toFahrenheit(temperature.value) : temperature.value;

    return (
        <div>
            <CelsiusInput celsius={celsius} onTemperatureChange={handleTemperatureChange} />
            <FahrenheitInput fahrenheit={fahrenheit} onTemperatureChange={handleTemperatureChange} />
        </div>
    );
}

export default TemperatureConverter;
