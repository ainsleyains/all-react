import { useState } from 'react';
import Star from './Star';
import PropTypes from 'prop-types';

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
};

const starStyle = {
    display: 'flex',
};

StarsRating.propTypes = {
    maxRating: PropTypes.number,
    color: PropTypes.string,
    size: PropTypes.number,
    defaultRating: PropTypes.number,
    onSetRating: PropTypes.func,
};

export default function StarsRating({
    maxRating = 10,
    color = '#fcc419',
    size = 48,
    defaultRating = 0,
    onSetRating,
}) {
    const [rating, setRating] = useState(defaultRating);
    const [tempRating, setTempRating] = useState(1);

    function handleRating(rating) {
        setRating(rating);
        onSetRating(rating);
    }

    const textStyle = {
        lineHeight: '1',
        margin: '0',
        color,
        fontSize: `${size / 1.5}px`,
    };
    return (
        <div style={containerStyle}>
            <div style={starStyle}>
                {Array.from({ length: maxRating }, (_, i) => (
                    <Star
                        key={i}
                        onRating={() => handleRating(i + 1)}
                        full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                        onHoverIn={() => setTempRating(i + 1)}
                        onHoverOut={() => setRating(0)}
                        color={color}
                        size={size}
                    />
                ))}
            </div>
            <p style={textStyle}>{tempRating || rating || ''}</p>
        </div>
    );
}
