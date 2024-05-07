import { useState } from "react";
import { SignUp } from "../SignUp/SignUp";

const Login = () => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isSignUp, setIsSignUp] = useState<boolean>(false);

    const handleLogIn = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(username);
        console.log(password);
    }

    const handleUsernameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setUsername(event.target.value);
    }

    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const handleSignUp = () => {
        setIsSignUp(true);
    }

    return (
        <>
            {isSignUp ? <SignUp /> 
            : 
            (
                <>
                    <form onSubmit={handleLogIn} >
                        username: <input name ="user" onChange={handleUsernameInput} />
                        password: <input name="password" onChange={handlePasswordInput} />
                        <button>Log In</button>
                    </form>
                    <button onClick= {handleSignUp}>Sign Up</button>
                </>
            )}
        </>
    );
}

export default Login;