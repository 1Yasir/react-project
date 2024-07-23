import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error("Error", err.message))
    }, [url])

    return [data];
}

export default useFetch;