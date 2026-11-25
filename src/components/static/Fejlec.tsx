import type { navbarProps } from "../types/props";

function Fejlec({setOldal}: navbarProps) {
    return (
        <>
        <nav className="navbar navbar-expand-sm bg-light justify-content-center">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" onClick={() => setOldal('index')}>Főoldal</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => setOldal('mod')}>Moderátor</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => setOldal('admin')}>Admin</a>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Fejlec;