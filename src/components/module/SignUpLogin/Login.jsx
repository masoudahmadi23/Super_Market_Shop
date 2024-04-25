import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { getUsers } from "../../../services/api";
import { useNavigate } from "react-router-dom";

function Login({ setActiveTab }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (!user) {
      setError("نام کاربری یا رمز عبور اشتباه است یا نام کاربری وجود ندارد.");
      return;
    }
    navigate("/dashboard");
  };

  useEffect(() => {
    try {
      const fetchApi = async () => setUsers(await getUsers());
      fetchApi();
    } catch (error) {
      setError("مشکلی در برقراری ارتباط با سرور وجود دارد.");
    }
  }, []);
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        className={styles.login_inp}
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="نام کاربری"
      />
      <input
        className={styles.login_inp}
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="رمز عبور"
      />
      <p
        onClick={() => setActiveTab("register")}
        style={{ color: "#0ec376", cursor: "pointer" }}
      >
        ایجاد حساب کاربری
      </p>
      <button id={styles.bttn} type="submit">
        ورود
      </button>
    </form>
  );
}

export default Login;
