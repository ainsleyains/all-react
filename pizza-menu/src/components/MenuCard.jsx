export default function MenuCard({ pizzaObj }) {
    console.log(pizzaObj.name);
    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img
                src={pizzaObj.photoName}
                alt={pizzaObj.name}
            />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
            </div>
            <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
        </li>
    );
}
