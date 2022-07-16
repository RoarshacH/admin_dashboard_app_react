import React, { useRef, useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // runs when the user sumits the signin form gets the email and password from ref values of the corosponding inputs
  // perform validations on them and call the login function from authContext
  async function onSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) {
      try {
        setError("");
        setLoading(true);
        await login(email, password)
          .then((userCredential) => {
            // Signed in
            // const user = userCredential.user;
            navigate("/dashboard");
            // if successfuly login redirect the user to dashboard
          })
          .catch((error) => {
            // if there is a  error set error values
            const errorMessage = error.message;
            setError(errorMessage);
            // ..
          });
      } catch {
        setError("Failed to log in");
      }
    }
  }
  // When the user clicks the forget password a reste email will be set using firebase function for the email in the email field
  async function forgotPasswordHandler() {
    const email = emailRef.current.value;
    if (email) {
      await resetPassword(emailRef.current.value).then(() => (emailRef.current.value = ""));
    }
  }
  return (
    <div className="container-fluid h-100 text-center align-middle auth-container mt-5 mb-5">
      <form className="form-signin  card mt-5" onSubmit={onSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        {/* Render the Signin Errors here if there are any */}
        {error && <Alert variant="danger">{error}</Alert>}
        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input type="email" id="inputEmail" ref={emailRef} className="form-control" placeholder="Email address" required autofocus />

        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input type="password" id="inputPassword" ref={passwordRef} className="form-control" placeholder="Password" required />

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
      </form>
    </div>
  );
};

export default SignIn;
