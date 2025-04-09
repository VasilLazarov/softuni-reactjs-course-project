import { Link } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default function Header() {
    library.add(fas);
    return (
        <header>
            <h1>
                <Link to="/">VL Book Library</Link>
            </h1>
            <nav>
                {/* Show correct links when user is logged and not logged */}
                <div>
                    <Link to="/books">Books</Link>
                    <Link to="/books/create">Create Book</Link>
                    <Link to="/userInfo">
                        <FontAwesomeIcon icon="fa-solid fa-user" />
                    </Link>
                    <Link to="/logout">Logout</Link>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    
                </div>
            </nav>
        </header>
    );
}
