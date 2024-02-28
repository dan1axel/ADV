

export default function TabButton ({ tabName, tab, setTab }) {

    return (
        <li>
            <button className={tab === tabName ? 'active': ''} onClick={() => setTab(tabName)}>
                { tabName }
            </button>
        </li>
    );
}