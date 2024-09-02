// export default function TabButton(props) {
export default function TabButton({ children, onSelect }) {
    // In Regular JS, to Add a Event Listener
    /* document.querySelector('button').addEventListener('click', 
        () => {

        }
    ) */

    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}


