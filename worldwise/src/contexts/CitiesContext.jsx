import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';

const BASE_URL = 'http://localhost:9000';

const CitiesContext = createContext();

function CitiesProvider({ children }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
    return <CitiesContext.Provider value={(cities, isLoading)}>{children}</CitiesContext.Provider>;
}

CitiesProvider.propTypes = {
    children: PropTypes.node.isRequired,
    myProp: PropTypes.string.isRequired,
};

export { CitiesProvider };
