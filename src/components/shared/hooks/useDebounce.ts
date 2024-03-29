import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const debounce = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(debounce);
        };
    }, [value, delay]);
    return debouncedValue;
};
