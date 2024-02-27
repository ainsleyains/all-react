export default function MenuCard({ pizzaObj }) {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img
                src={pizzaObj.photoName}
                alt={pizzaObj.name}
            />
        </li>
    );
}
