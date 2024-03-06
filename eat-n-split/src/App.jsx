import { useState } from 'react';
import Button from './components/Button';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';
import FriendList from './components/FriendList';
import data from './data';

function App() {
    const [friends, setFriends] = useState(data);

    const [showAddForm, setShowAddForm] = useState(false);

    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleShow() {
        setShowAddForm((prevShowAddForm) => !prevShowAddForm);
    }

    function handleAddFriend(friendObj) {
        setFriends((prevFriends) => [...prevFriends, friendObj]);
        setShowAddForm(false);
    }

    function handleSelectedFriend(selectedObj) {
        setSelectedFriend((prevSelectedFriend) =>
            prevSelectedFriend?.id === selectedObj.id ? null : selectedObj
        );
        setShowAddForm(false);
    }

    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendList
                    friends={friends}
                    selectedFriend={selectedFriend}
                    onSelectedFriend={handleSelectedFriend}
                />

                {showAddForm && <FormAddFriend onAddFriend={handleAddFriend} />}

                <Button onClick={handleShow}>{showAddForm ? 'Close' : 'Add Friend'}</Button>
            </div>

            {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
        </div>
    );
}

export default App;
