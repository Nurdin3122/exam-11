import React from 'react';
import {useAppDispatch} from "../../app/hooks.ts";
import {logout} from "../../Components/Users/UsersThunks.ts";
import {Link} from "react-router-dom";
import {User} from "../../Types.ts";

interface Props {
    user:User;
}

const HeaderForUser:React.FC<Props> = ({user}) => {
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand mb-0 h1">Flea Market</Link>
                    <div className="justify-content-end">
                        <span className="me-5">Hello: {user.username}</span>
                        <Link to="/items-form" className="btn btn-dark ms-3">Add a new item</Link>
                        <button className="btn btn-close-white" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default HeaderForUser;