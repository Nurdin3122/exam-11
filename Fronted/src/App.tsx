import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./Container/Home/Home.tsx";
import Header from "./Container/Header/Header.tsx";
import LogInUser from "./Components/Users/LogInUser.tsx";
import CreateUserForm from "./Components/Users/CreateUser.tsx";
import ItemsForm from "./Components/Items/ItemsForm.tsx";

const App = () => (
    <>
        <header>
            <Header/>
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/create-user-form" element={<CreateUserForm/>}/>
                <Route path="/check-user-form" element={<LogInUser/>}/>
                <Route path="/items-form" element={<ItemsForm/>}/>

                {/*<Route path="*" element={<h3 className="mt-5 text-center">There is not such route</h3>}/>*/}
            </Routes>
        </main>
    </>
);

export default App
