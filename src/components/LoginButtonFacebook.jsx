import React from "react";
import { FaFacebook } from "react-icons/fa";
export const LoginButtonFacebook = () => {
  
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/auth/facebook";
  };

  return (
    <div className="d-grid gap-1 col-2 mx-auto">
      <button onClick={handleLogin} className="btn btn-primary" type="button">
        <FaFacebook/> Login con facebook
      </button>
    </div>
  );
};

export default LoginButtonFacebook