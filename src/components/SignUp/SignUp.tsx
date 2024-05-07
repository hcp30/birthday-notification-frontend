import { useState } from "react";
import Login from "../Login/Login";

export const SignUp = () => {

    const [isLogin, SetIsLogin] = useState<boolean>(false);

    const handleBackToLogin = () => {
        SetIsLogin(true);
    }

    return (
        <>
            {
                isLogin ? <Login /> :
                <>
                    <h1>Sign Up Page</h1>
                    <button onClick={handleBackToLogin}>Back to Log In</button>
                </>
            }
        </>
    );
}