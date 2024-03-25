import styles from './CityList.module.css';
import PropTypes from 'prop-types';
import CityItem from './CityItem';
import Spinner from './Spinner';
import Message from './Message';
import { useCities } from '../contexts/CitiesContext';

export default function CityList() {
    const { cities, isLoading } = useCities();

    if (isLoading) return <Spinner />;

    if (!cities.length) return <Message message='Add your first city on the map' />;
    return (
        <ul className={styles.cityList}>
            {cities.map((city) => (
                <CityItem
                    city={city}
                    key={city.id}
                />
            ))}
        </ul>
    );
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
        })
    ).isRequired,
    isLoading: PropTypes.bool.isRequired,
};
