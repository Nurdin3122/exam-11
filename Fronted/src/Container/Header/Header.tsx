import {useAppSelector} from "../../app/hooks.ts";
import {userState} from "../../Components/Users/UsersSlice.ts";
import HeaderForUser from "./HeaderForUser.tsx";
import HeaderForAnon from "./HeaderForAnon.tsx";

const Header = () => {
    const user = useAppSelector(userState);
    return (
        <div>
            {user ? (
                <HeaderForUser user={user}/>
            ) : (
                <HeaderForAnon/>
            )}
            
        </div>
    );
};

export default Header;