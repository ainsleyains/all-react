import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { useState } from 'react';

function App() {
    const [items, setItems] = useState([]);

    function handleAddItem(item) {
        setItems((prevItems) => [...prevItems, item]);
    }

    function handleDeleteItem(id) {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }

    return (
        <div className='app'>
            <Logo />
            <Form onAddItems={handleAddItem} />
            <PackingList
                items={items}
                onDeleteItems={handleDeleteItem}
            />
            <Stats />
        </div>
    );
}

export default App;
