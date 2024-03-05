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

    function handleToggleItem(id) {
        setItems((prevItems) =>
            prevItems.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
        );
    }

    function handleClearList() {
        const confirmed = window.confirm('Are you sure you want to delete all items?');
        if (confirmed) setItems([]);
    }

    return (
        <div className='app'>
            <Logo />
            <Form onAddItems={handleAddItem} />
            <PackingList
                items={items}
                onDeleteItems={handleDeleteItem}
                onToggleItems={handleToggleItem}
                onClearList={handleClearList}
            />
            <Stats items={items} />
        </div>
    );
}

export default App;
