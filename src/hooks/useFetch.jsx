import { useEffect, useState } from "react";


export default function useFetch(url){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(url).then((res) => {
            if(!res.ok){
                throw new Error('Failed to Get Data')
            }

            return res.json()
        })
        .then((data) => setData(data))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false))
    }, [url])


    return {data, loading, error}

}
