import data from '../data';
import MenuCard from './MenuCard';

export default function Menu() {
    const pizzaData = data;
    const nums = pizzaData.length;
    console.log(nums);
    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            {nums > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose from. All from our
                        stone oven, all organic, all delicious.
                    </p>
                    <ul className='pizzas'>
                        {pizzaData.map((pizza) => (
                            <MenuCard
                                key={pizza.name}
                                pizzaObj={pizza}
                            />
                        ))}
                    </ul>
                </>
            ) : (
                <p>We're still working on our menu. Please come back later.</p>
            )}
        </main>
    );
}
