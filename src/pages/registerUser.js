import React, { useRef, useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { doc, setDoc, getFirestore } from "firebase/firestore";

const Register = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const db = getFirestore();

  // Runs when the user submits the form validate the fields and if theere are any it will set errors
  // if all fields are valid use the signup function from AuthContext and signup the user
  async function setDataDB(user, name) {
    if (user !== null) {
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: user.email,
        displayName: user.displayName,
      })
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  }

  async function onSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    if (email && name && password) {
      try {
        setError("");
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/");
            setDataDB(user, name);
            // if successfully registed redirect the user to sign in page
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
            // If there are any errors set the errors
          });
      } catch {
        setError("Failed to create an account");
      }

      setLoading(false);
    } else {
      return setError("Please Fill in the fields");
    }
  }
  return (
    <div className="container-fluid h-100 text-center align-middle auth-container mt-5 mb-5">
      <form className="form-signin  card mt-5" onSubmit={onSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        {/* If there are any errors set this part will render to show them */}
        {error && <Alert variant="danger">{error}</Alert>}
        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input type="email" id="inputEmail" ref={emailRef} className="form-control" placeholder="Email address" required autofocus />

        <label for="inputName" className="sr-only">
          Name
        </label>
        <input type="text" id="inputName" ref={nameRef} className="form-control" placeholder="Name" required autofocus />

        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input type="password" id="inputPassword" ref={passwordRef} className="form-control" placeholder="Password" required />

        <label for="inputPasswordConf" className="sr-only">
          Confirm Password
        </label>
        <input type="password" id="inputPasswordConf" ref={passwordConfirmRef} className="form-control" placeholder="Confirm Password" required />

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Register;
