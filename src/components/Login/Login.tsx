import { useState } from "react";
import { SignUp } from "../SignUp/SignUp";

const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isSignUp, setIsSignUp] = useState<boolean>(false);

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
                        email address: <input name ="email" onChange={handleEmailAdressInput} />
                        password: <input name="password" onChange={handlePasswordInput} />
                        <button>Log In</button>
                        <button>Hey yall</button>
                    </form>
                    <button onClick= {handleSignUp}>Sign Up</button>
                </>
            )}
        </>
    );
}

export default Login;