import React, { useContext } from "react";
import { signOutt } from "../firebase_setup/firebaseAuth";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../firebase_setup/AuthContext";
import { auth } from "../firebase_setup/firebase";

const SignOut = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // signOutt(auth).then(() => {
    //   // Sign-out successful.
    //   navigate("/login");
    //   window.alert("Signed out successfully");
    // });
  };

  if (!user) {
    return <Navigate replace to="/login" />;
  }

  return (
    <>
      <div>SignOut</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default SignOut;
