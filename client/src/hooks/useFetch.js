import { useState, useEffect } from 'react';

function useFetch(url, requestInfo) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url, requestInfo)
            .then(res => res.json())
            .then(data => {
                setData([data]);
            })
            .catch(e => console.error(e));
    }, [url, requestInfo]);

    return data;
}

export default useFetch;