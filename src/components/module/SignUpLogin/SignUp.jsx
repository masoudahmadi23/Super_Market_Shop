import { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [emailError, setEmailError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // اجرای بررسی‌های لازم
    if (registerData.password !== registerData.confirmPassword) {
      setConfirmError("رمز عبور یکسان نیستند!");
      return;
    }
    if (!validateEmail(registerData.email)) {
      setEmailError("لطفا یک ایمیل معتبر استفاده کنید!");
      return;
    }
    try {
      await axios.post(
        "https://shop-server-red.vercel.app/users",
        registerData
      );
      console.log("Registration successful");
      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        // فرض بر این است که سرور در صورت تکراری بودن نام کاربری کد 409 را برمی‌گرداند
        setError("این نام کاربری قبلا انتخاب شده است.");
      } else {
        setError("خطایی رخ داده است. لطفا دوباره تلاش کنید.");
      }
    }
  };

  const validateEmail = (email) => {
    // اینجا یک بررسی ساده برای ایمیل انجام می‌دهیم
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.login_inp}
        type="text"
        name="username"
        value={registerData.username}
        onChange={handleChange}
        placeholder="نام کاربری"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        className={styles.login_inp}
        type="email"
        name="email"
        value={registerData.email}
        onChange={handleChange}
        placeholder="ایمیل"
      />
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      <input
        className={styles.login_inp}
        type="password"
        name="password"
        value={registerData.password}
        onChange={handleChange}
        placeholder="رمز عبور"
      />
      <input
        className={styles.login_inp}
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={registerData.confirmPassword}
        onChange={handleChange}
        placeholder="تایید رمز عبور"
      />
      {confirmError && <p style={{ color: "red" }}>{confirmError}</p>}
      <button id={styles.bttn} type="submit">
        ثبت نام
      </button>
    </form>
  );
}

export default SignUp;
