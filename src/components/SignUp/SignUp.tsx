import { FormEvent, useState } from "react";
import Login from "../login/Login";
import { Link } from "react-router-dom";

export const SignUp = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailAddressInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            email,
            password
        };

        const response = await fetch('http://localhost:8080/auth/signup', {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        console.log(`response: `);
        console.log(response);
        const body = await response.json();
        console.log(`response.json(): `);
        console.log(body);
        if (body.token) {
            localStorage.setItem('token',body.token);
        }
        console.log(`localStorage: ${localStorage.getItem('token')}`);
    }

    return (
        <>
            <h1>Sign Up Page</h1>
            <form onSubmit={handleSignUp}>
                email address: <input onChange={handleEmailAddressInput}/>
                password: <input onChange={handlePasswordInput}/>
                <button>Sign Up</button>
            </form>
            <Link to="/login"><button>Back to Log In</button></Link>
        </>
    );
}