import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../../api/supabase";

import "./LoginPage.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  // const location = useLocation();
  // const { from } = location.state || { from: { pathname: "/" } }; // Get the previous location or set it to the home page

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setErrorMessage("");

      const { user, error } = await supabase.auth.signIn({ email, password });

      if (error) {
        if (error.code === "InvalidCredentialsException") {
          setErrorMessage("Invalid email or password");
        } else {
          setErrorMessage("An error occurred during sign-in");
          console.error("An error occurred during sign-in:", error.message);
        }
      } else {
        console.log("User signed in:", user);
        // navigate(from); // Redirect to the previous location
        navigate("/bénévoles"); // Redirect to the "/bénévoles" endpoint
      }
    } catch (error) {
      setErrorMessage("An error occurred");
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
      setPassword("");
    }
  };

  return (
    <div className="login-page page-content">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
