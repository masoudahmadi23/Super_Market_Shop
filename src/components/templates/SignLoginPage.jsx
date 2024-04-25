import { useState } from "react";
import Login from "../module/SignUpLogin/Login";
import SignUp from "../module/SignUpLogin/SignUp";
import styles from "./SignLoginPage.module.css";
function SignLoginPage() {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className={styles.container}>
      <div style={{ marginBottom: "20px" }}>
        <button
          className={`${styles.tab} ${
            activeTab === "login" ? styles.active : ""
          }`}
          onClick={() => handleTabChange("login")}
        >
          ورود
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "register" ? styles.active : ""
          }`}
          onClick={() => handleTabChange("register")}
        >
          ثبت نام
        </button>
      </div>
      <div>
        {activeTab === "login" ? (
          <Login setActiveTab={setActiveTab} />
        ) : (
          <SignUp />
        )}
      </div>
    </div>
  );
}

export default SignLoginPage;
