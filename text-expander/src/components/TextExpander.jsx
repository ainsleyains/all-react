import { useState } from 'react';

export default function TextExpander({
    collapsedNumWords = 10,
    expandButtonText = 'Show More',
    collapseButtonText = 'Close text',
    buttonColor = '#27af1d',
    expanded,
    className,
    children,
}) {
    const [isExpand, setIsExpand] = useState(expanded);

    const buttonStyle = {
        backgroundColor: 'none',
        border: 'none',
        cursoe: 'pointer',
        marginLeft: '8px',
        color: buttonColor,
        fontSize: '15px',
    };

    // const displayText = isExpand
    //     ? children
    //     : children.split('').slice(0, collapsedNumWords).join`` + '...';

    return (
        <div className={className}>
            <span>
                {isExpand
                    ? children
                    : children.split('').slice(0, collapsedNumWords).join`` + '...'}
            </span>
            <button
                style={buttonStyle}
                onClick={() => setIsExpand((prevIsExpand) => !prevIsExpand)}
            >
                {isExpand ? collapseButtonText : expandButtonText}
            </button>
        </div>
    );
}
