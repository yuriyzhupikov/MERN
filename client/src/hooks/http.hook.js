import {useCallback, useState} from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false); // хук состояния загрузки с сервера
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method='GET', body=null, headers={})=> {
        try {
            setLoading(true)
            const res = await fetch(url, {method, body, headers});
            const data = await res.json();

            if(!res.ok) {
                throw new Error(data.message || 'Error');
            };
            setLoading(false);
            return data;
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const clearError = () => setError(null);

    return {loading, request, error, clearError}
}