//@ts-ignore
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Navigation;