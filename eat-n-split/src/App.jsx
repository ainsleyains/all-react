import { useState } from 'react';
import Button from './components/Button';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';
import FriendList from './components/FriendList';

function App() {
    const [showAddForm, setShowAddForm] = useState(false);

    function handleShow() {
        setShowAddForm((prevShowAddForm) => !prevShowAddForm);
    }

    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendList />
                {showAddForm && <FormAddFriend />}
                <Button onClick={handleShow}>{showAddForm ? 'Close' : 'Add Friend'}</Button>
            </div>
            <FormSplitBill />
        </div>
    );
}

export default App;
