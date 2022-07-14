const { useEffect, useState } = require('react');

const useDebounce = (query, delay) => {
    const [debounceValue, setDebounceValue] = useState(query);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const id = setTimeout(() => {
            setDebounceValue(query);
            setIsLoading(false);
        }, delay);
        return () => {
            clearTimeout(id);
        };
    }, [query, delay]);

    return { debounceValue, isLoading };
};

export default useDebounce;
