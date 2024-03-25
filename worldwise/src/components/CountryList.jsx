import styles from './CountryList.module.css';
import PropTypes from 'prop-types';
import CountryItem from './CountryItem';
import Spinner from './Spinner';
import Message from './Message';
import { useCities } from '../contexts/CitiesContext';

export default function CountryList() {
    const { cities, isLoading } = useCities();

    if (isLoading) return <Spinner />;

    if (!cities.length) return <Message message='Add your first city on the map' />;
    const countries = cities.reduce((acc, curr) => {
        if (!acc.map((el) => el.country).includes(curr.country))
            return [...acc, { country: curr.country, emoji: curr.emoji }];
    }, []);

    return (
        <ul className={styles.cityList}>
            {countries.map((country) => (
                <CountryItem
                    country={country}
                    key={country.country}
                />
            ))}
        </ul>
    );
}

CountryList.propTypes = {
    countries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
        })
    ).isRequired,
    isLoading: PropTypes.bool.isRequired,
};

CountryList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};
