import data from '../data';
import Friend from './Friend';

export default function FriendList() {
    return (
        <ul className=''>
            {data.map((friend) => (
                <Friend
                    key={friend.id}
                    friend={friend}
                />
            ))}
        </ul>
    );
}
