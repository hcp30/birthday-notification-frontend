import { FormEvent, useState } from "react";
import Login from "../Login/Login";

export const SignUp = () => {

    const [isLogin, SetIsLogin] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleBackToLogin = () => {
        SetIsLogin(true);
    }

    const handleEmailAddressInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
    }

    return (
        <>
            {
                isLogin ? <Login /> :
                <>
                    <h1>Sign Up Page</h1>
                    <form onSubmit={handleSignUp}>
                        email address: <input onChange={handleEmailAddressInput}/>
                        password: <input onChange={handlePasswordInput}/>
                        <button>Sign Up</button>
                    </form>
                    <button onClick={handleBackToLogin}>Back to Log In</button>
                </>
            }
        </>
    );
}