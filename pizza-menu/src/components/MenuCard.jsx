export default function MenuCard({ pizzaObj }) {
    console.log(pizzaObj.name);
    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img
                src={pizzaObj.photoName}
                alt={pizzaObj.name}
            />
        </li>
    );
}
