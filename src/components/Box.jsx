
const boxClass = "box mb-16 w-3/4 bg-gray-700 rounded-lg shadow-xl";
const boxHeaderClass = "box-header bg-gray-500 h-10 rounded-t-lg py-3 px-4";
const redButtonClass = "red rounded-full bg-red-500 h-4 w-4  mx-1";
const yellowButtonClass = "yellow rounded-full bg-yellow-500 h-4 w-4 mx-1";
const greenButtonClass = "green rounded-full bg-green-500 h-4 w-4 mx-1";


function Button({ color }) {
    const buttonClass = `${color} rounded-full h-4 w-4 mx-1`;
    return <div className={buttonClass}></div>;
}

export default function Box({ children }) {
    return (
        <div className={`${boxClass}`}>
            <div className={boxHeaderClass}>
                <div className="buttons flex -ml-2">
                    <Button color={redButtonClass} />
                    <Button color={yellowButtonClass} />
                    <Button color={greenButtonClass} />
                </div>
            </div>
            <div className="box-content pb-16 p-8">
                {children}
            </div>
        </div>
    );
}