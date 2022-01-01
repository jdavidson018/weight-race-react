import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <h1>Header</h1>
            <nav>
                <Link to="/dashboard">Dashboard</Link> |{" "}
                <Link to="/users">Users</Link> | {" "}
                <Link to="/">Home</Link>
            </nav>
        </div>
    )
}