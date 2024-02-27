import Order from './Order';

export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;
    return (
        <footer className='footer'>
            {isOpen ? (
                <Order
                    openHour={openHour}
                    closeHour={closeHour}
                />
            ) : (
                <p>
                    We're open from {openHour} to {closeHour}
                </p>
            )}
        </footer>
    );
}
