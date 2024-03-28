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

    async function createCity(newCity) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/`, {
                method: 'POST',
                body: JSON.stringify(newCity),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            setCities((cities) => [...cities, data]);
        } catch (err) {
            alert('an error on creating city');
        } finally {
            setIsLoading(false);
        }
    }

    async function deleteCity(id) {
        try {
            setIsLoading(true);
            await fetch(`${BASE_URL}/cities/${id}`, {
                method: 'DELETE',
            });

            setCities((cities) => cities.filter((city) => city.id !== id));
        } catch (err) {
            alert('an error on deleting city');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity, createCity, deleteCity }}>
            {children}
        </CitiesContext.Provider>
    );
}

function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined) throw new Error('CitiesContext was used outside CitiesProvider');
    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };
