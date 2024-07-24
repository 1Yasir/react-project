import { useState, useEffect } from "react";


export const useCurrencyInfo = (currency) => {


    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/4fe08b26b7c8e8a4a0ce6890/latest/${currency}`)
            .then((res) => res.json())
            .then((data) => setData(data.conversion_rates))
            .catch((err) => console.log(err.message))
    }, [currency]);

    return data
}


