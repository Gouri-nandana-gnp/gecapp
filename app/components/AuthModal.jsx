"use client";

import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import firebaseApp from "../firebase/config.js"; // Adjust the path if necessary

export default function AuthModal() {
  const [mode, setMode] = useState("signin"); // Switch between "signin" and "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(firebaseApp);
  const googleProvider = new GoogleAuthProvider();

  // Email/Password handlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === "signup") {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign up successful!");
      } catch (error) {
        alert(error.message);
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Sign in successful!");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  // Google Sign-In handler
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Sign-In successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.modal}>
        <h2 style={styles.title}>
          {mode === "signup" ? "Sign Up" : "Sign In"} with Email
        </h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            {mode === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p style={styles.toggleText}>
          {mode === "signup"
            ? "Already have an account? "
            : "Don't have an account? "}
          <span
            style={styles.toggleLink}
            onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
          >
            {mode === "signup" ? "Sign In" : "Sign Up"}
          </span>
        </p>
        <p style={styles.orText}>Or</p>
        <button onClick={handleGoogleSignIn} style={styles.googleButton}>
          Sign In with Google
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#0D1117",
  },
  modal: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#161B22",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    color: "#FFFFFF",
    marginBottom: "20px",
  },
  form: {
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#C9D1D9",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #30363D",
    backgroundColor: "#0D1117",
    color: "#FFFFFF",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#1F6FEB",
    color: "#FFFFFF",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  toggleText: {
    marginTop: "10px",
    color: "#C9D1D9",
  },
  toggleLink: {
    color: "#1F6FEB",
    cursor: "pointer",
    textDecoration: "underline",
  },
  orText: {
    margin: "20px 0",
    color: "#C9D1D9",
  },
  googleButton: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4285F4",
    color: "#FFFFFF",
    fontSize: "16px",
    cursor: "pointer",
  },
};
