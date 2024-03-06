import Friend from './Friend';

export default function FriendList({ friends, onSelectedFriend }) {
    return (
        <ul className=''>
            {friends.map((friend) => (
                <Friend
                    key={friend.id}
                    friend={friend}
                    onSelectedFriend={onSelectedFriend}
                />
            ))}
        </ul>
    );
}
