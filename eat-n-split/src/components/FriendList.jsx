import Friend from './Friend';

export default function FriendList({ friends, selectedFriend, onSelectedFriend }) {
    return (
        <ul className=''>
            {friends.map((friend) => (
                <Friend
                    key={friend.id}
                    friend={friend}
                    selectedFriend={selectedFriend}
                    onSelectedFriend={onSelectedFriend}
                />
            ))}
        </ul>
    );
}
