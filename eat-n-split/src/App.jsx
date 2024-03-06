import Button from './components/Button';
import FormAddFriend from './components/FormAddFriend';
import FriendList from './components/FriendList';

function App() {
    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendList />
                <FormAddFriend />
                <Button>Add Friend</Button>
            </div>
        </div>
    );
}

export default App;
