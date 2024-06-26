import { openModal } from '../features/modal/modalSlice';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';

export default function CartContainer() {
    const dispatch = useDispatch();
    const { cartItems, total, amount } = useSelector((store) => store.cart);
    if (amount < 1)
        return (
            <section className='cart'>
                <header>
                    <h2>Your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        );
    return (
        <section className='cart'>
            <header>
                <h2>Your bag</h2>
            </header>
            <ul>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <button
                    className='btn clear-btn'
                    onClick={() => dispatch(openModal())}
                >
                    Clear Cart
                </button>
            </footer>
        </section>
    );
}
