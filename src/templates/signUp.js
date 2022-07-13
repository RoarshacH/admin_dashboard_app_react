import React, {useRef} from "react";
import {useUserContext} from "../../context/userContext";

const SignUp = () => {
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const { registerUser } = useUserContext();
    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        if (email && name && password) {
            registerUser(email, name, password);
        }
    };
    return (
        <div className="form">
            <h2>New User</h2>
            <form onSubmit={onSubmit}>
                <input placeholder="Email" type="email" ref={emailRef} />
                <input placeholder="Name" type="name" ref={nameRef} />
                <input placeholder="Password" type="password" ref={passwordRef} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;