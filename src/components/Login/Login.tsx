import { useState } from "react";
import { SignUp } from "../signup/SignUp";
import { Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogIn = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
    }

    const handleEmailAdressInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const heyYall = () => {
        console.log(`heyyall: ${localStorage.getItem('token')}`);
    }

    return (
        <>
            <h1>Log In Page</h1>
            <form onSubmit={handleLogIn} >
                email address: <input name ="email" onChange={handleEmailAdressInput} />
                password: <input name="password" onChange={handlePasswordInput} />
                <button>Log In</button>
                <button onClick={heyYall} >Hey yall</button>
            </form>
            <Link to="/signup"><button>Go To SIgnUP</button></Link>
        </>
    );
}

export default Login;