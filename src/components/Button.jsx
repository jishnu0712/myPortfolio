export default function Button({ darkMode, name, id, onClick, disabled, children }) {

    const buttonClass = `py-2 px-4 ml-4 mb-4  border-gray-400
    rounded-full text-lg tracking-wider  shadow-lg ${disabled ? "text-gray-800" : "border-2 text-sky-800 hover:text-sky-600 font-bold"} ${darkMode ? 'text-gray-300' : ''}`;


    return (
        <button
            className={buttonClass}
            name={name}
            id={id}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}