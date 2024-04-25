import React, { useState } from "react";
import axios from "axios";
import styles from "./FormContact.module.css";

function FormContact() {
  const [confirmation, setConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    subject: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateMobile = (mobile) => {
    const mobilePattern = /^[0-9]{11}$/;
    return mobilePattern.test(mobile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // اعتبارسنجی
    let formErrors = {};
    if (!formData.firstName.trim()) {
      formErrors.firstName = "نام الزامی است";
    }
    if (!formData.lastName.trim()) {
      formErrors.lastName = "نام خانوادگی الزامی است";
    }
    if (!formData.phoneNumber.trim()) {
      formErrors.phoneNumber = "شماره تلفن الزامی است";
    } else if (!validateMobile(formData.phoneNumber.trim())) {
      formErrors.phoneNumber = "شماره تلفن معتبر نیست";
    }
    if (!formData.subject.trim()) {
      formErrors.subject = "موضوع الزامی است";
    }
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:8000/usercontact",
          formData
        );
        console.log("Response:", response.data);
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          subject: "",
        });
        setConfirmation(true);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        نام:
        <input
          className={styles.input}
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        {errors.firstName && (
          <span className={styles.error}>{errors.firstName}</span>
        )}
      </label>
      <label className={styles.label}>
        نام خانوادگی:
        <input
          className={styles.input}
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        {errors.lastName && (
          <span className={styles.error}>{errors.lastName}</span>
        )}
      </label>
      <label className={styles.label}>
        شماره تماس:
        <input
          className={styles.input}
          placeholder="09120000000"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        {errors.phoneNumber && (
          <span className={styles.error}>{errors.phoneNumber}</span>
        )}
      </label>
      <label className={styles.label}>
        موضوع:
        <input
          className={styles.input}
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        {errors.subject && (
          <span className={styles.error}>{errors.subject}</span>
        )}
      </label>
      <button className={styles.button} type="submit">
        ارسال
      </button>
      {confirmation ? (
        <p style={{ color: "green" }}>فرم با موفقیت ارسال شد</p>
      ) : (
        ""
      )}
    </form>
  );
}

export default FormContact;
