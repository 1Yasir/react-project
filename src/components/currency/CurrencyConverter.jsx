import React, { useState, useEffect } from 'react';
import { useCurrencyInfo } from '../../customHook/useCurrencyInfo';
import './CurrencyConverter.css'; // CSS file import

function CurrencyConverter() {
    const [amount, setAmount] = useState("");
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('PKR');
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    useEffect(() => {
        if (currencyInfo[to]) {
            setConvertedAmount(amount * currencyInfo[to]);
        }
    }, [amount, to, currencyInfo]);

    const handleAmountChange = (e) => {
        setAmount(Number(e.target.value));
    };

    const handleFromChange = (e) => {
        setFrom(e.target.value);
    };

    const handleToChange = (e) => {
        setTo(e.target.value);
    };

    return (
        <div className='w-100 vh-100 d-flex justify-content-center align-items-center bg-dark'>

            <div className="currency-converter w-50">
                <h1>Currency Converter</h1>
                <div className="input-group">
                    <input
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="Enter amount"
                        className="input-amount"
                    />
                    <select value={from} onChange={handleFromChange} className="currency-select">
                        {options.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency.toUpperCase()}
                            </option>
                        ))}
                    </select>
                    <select value={to} onChange={handleToChange} className="currency-select">
                        {options.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>
                <p className="conversion-result">
                    {amount} {from.toUpperCase()} is equal to {convertedAmount} {to.toUpperCase()}
                </p>
            </div>

        </div>

    );
}

export default CurrencyConverter;
