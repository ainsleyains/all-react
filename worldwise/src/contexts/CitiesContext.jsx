import { createContext, useState, useEffect, useContext } from 'react';

const BASE_URL = 'http://localhost:9000';

const CitiesContext = createContext();

// eslint-disable-next-line react/prop-types
function CitiesProvider({ children }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setCities(data);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    async function getCity(id) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            setCurrentCity(data);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>{children}</CitiesContext.Provider>
    );
}

function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined) throw new Error('CitiesContext was used outside CitiesProvider');
    return context;
}

export { CitiesProvider, useCities };