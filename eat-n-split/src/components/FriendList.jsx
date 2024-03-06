import Friend from './Friend';

export default function FriendList({ friends }) {
    return (
        <ul className=''>
            {friends.map((friend) => (
                <Friend
                    key={friend.id}
                    friend={friend}
                />
            ))}
        </ul>
    );
}
