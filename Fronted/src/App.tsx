import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./Container/Home/Home.tsx";
import Header from "./Container/Header/Header.tsx";
import LogInUser from "./Components/Users/LogInUser.tsx";
import CreateUserForm from "./Components/Users/CreateUser.tsx";

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
            </Routes>
        </main>
    </>
);

export default App
