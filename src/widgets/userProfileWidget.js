import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function UserProfileWidget() {
  // Widget gets the curent user from the firebase auth and shows the users email
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <div className="col-md-3 mx-3 h-100 card" style={{ marginTop: "4rem" }}>
        <h4 className="font-weight-bold header-animated pb-4 mt-2" style={{ marginBottom: "0rem" }}>
          User Profile
        </h4>
        <div className="align-items-center justify-content-center">
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email:</strong> {currentUser.email}
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
