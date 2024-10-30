import React from "react";
import { FaGoogle } from "react-icons/fa";
export const LoginButtonGoogle = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <div className="d-grid gap-1 col-2 mx-auto">
      <button onClick={handleLogin} className="btn btn-danger" type="button">
        <FaGoogle /> Login con Google
      </button>
    </div>
  );
};

export default LoginButtonGoogle