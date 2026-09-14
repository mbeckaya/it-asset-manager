import { Link } from 'react-router';

export default function Navbar() {
    return (
        <header className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">
                    IT Asset Manager
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/">Assets</Link>
                    </li>
                    <li>
                        <Link to="/assets/new">Add Asset</Link>
                    </li>
                    <li>
                        <Link to="/assignments">Assignments</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
