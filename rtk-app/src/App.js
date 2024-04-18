import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import { useEffect } from 'react';

function App() {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((store) => store.cart);

    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);
    return (
        <main className='App'>
            <Navbar />
            <CartContainer />
        </main>
    );
}

export default App;
