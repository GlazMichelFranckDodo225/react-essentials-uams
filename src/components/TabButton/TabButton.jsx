// export default function TabButton(props) {
export default function TabButton({ children }) {
    // In Regular JS, to Add a Event Listener
    /* document.querySelector('button').addEventListener('click', 
        () => {

        }
    ) */

    function handleClick() {
        console.log("Hi !");
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}


