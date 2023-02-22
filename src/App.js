import "./App.css";
import { useState } from "react";

function App() {
  const [track, setTrack] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const vaildateEmail = () => {
    if (email.trim()) setTrack(1);
    else alert("email required");
  };

  const vaildatePassword = () => {
    if (password.trim()) alert("your credentials are submitted");
    else alert("password required");
  };

  return (
    <div className="App">
      {track === 0 ? (
        <section className="email-section">
          <div className="email-div">
            <label className="email-label" htmlFor="email">
              Enter Your Email :
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(email) => {
                setEmail(email.target.value);
              }}
            ></input>
          </div>

          <button onClick={vaildateEmail}>Validate Email</button>
        </section>
      ) : (
        <section className="password-section">
          <div>
            <label className="password-label" htmlFor="password">
              Enter Your Password :
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(p) => {
                setPassword(p.target.value);
              }}
            ></input>
          </div>
          <button
            onClick={() => {
              setTrack(0);
            }}
          >
            back
          </button>
          <button onClick={vaildatePassword}>Submit</button>
        </section>
      )}
    </div>
  );
}

export default App;
