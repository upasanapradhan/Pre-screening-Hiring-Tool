import "./style/App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ db, setDb }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (db.current_login) {
      setTimeout(() => {
        navigate("/campaigns");
      }, 2 * 1000);
    }
  }, [db]);

  const login = () => {
    const account = db.admin_accounts.find((account) => {
      return account.email === email;
    });

    if (account) {
      setDb({
        ...db,
        current_login: {
          email: email,
          type: "employer",
        },
      });
    } else {
      alert("Login Failed");
    }
  };

  console.log(db.current_login);

  if (db.current_login) {
    return (
      <div className="greeting">
        <h5>Welcome back {db.current_login.email}</h5>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="home-container">
        <h1> Pre-screening Hiring Tool </h1>
        <h5> Enter your email address to login to your account </h5>
        <input className="input" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <button className="button" onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Home;
