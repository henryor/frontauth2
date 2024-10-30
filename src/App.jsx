import { LoginButtonGoogle } from "./components/LoginButtonGoogle";
import { LoginButtonFacebook } from "./components/LoginButtonFacebook";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row justify-content.center">
          <div className="card shadow p-5">
            <h1 className="center">TalentoTech Oauth2</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="html">
                  Usuario
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Registre su email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="html">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Su clave"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-5 ">
                Login
              </button>
            </form>
            <div className="d-flex justify-content-between">
              <LoginButtonGoogle />
              <LoginButtonFacebook />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
