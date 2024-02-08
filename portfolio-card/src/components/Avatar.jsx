import cat from '../asset/cat.jpeg';

export default function Avatar() {
    return (
        <div className='avatar'>
            <img
                src={cat}
                alt='cat'
            />
        </div>
    );
}
