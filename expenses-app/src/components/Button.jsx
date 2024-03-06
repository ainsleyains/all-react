export default function Button({ bgColor, textColor, onClick, children }) {
    return (
        <button
            className=''
            style={{ backgroundColor: bgColor, color: textColor }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
