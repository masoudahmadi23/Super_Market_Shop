import React, { useEffect, useState } from "react";
import styles from "./CustomerReviews.module.css";
import axios from "axios";
import { getComments } from "../../../services/api";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const CustomerReviews = ({ productId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [score, setScore] = useState(0);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [commentError, setCommentError] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const fetchApi = async () => setCommentsList(await getComments(productId));
    fetchApi();
  }, [productId]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleScoreChange = (newScore) => {
    setScore(newScore);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!name.trim()) {
      setNameError("نام را وارد کنید");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("ایمیل را با فرمت صحیح وارد کنید");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!comment.trim()) {
      setCommentError("نظر خود را وارد کنید");
      isValid = false;
    } else {
      setCommentError("");
    }

    if (isValid) {
      const newComments = {
        name,
        email,
        comment,
        score,
        productId,
      };

      // ارسال نظر جدید به سرور
      axios
        .post("https://shop-server-red.vercel.app/comments", newComments)
        .then((response) => {
          // اضافه کردن نظر جدید به لیست نظرات
          setCommentsList([newComments, ...commentsList]);
          // پاک کردن مقادیر فیلدهای فرم بعد از ارسال
          setName("");
          setEmail("");
          setComment("");
          setScore(0);
        })
        .catch((error) => {
          console.error("Error posting comment:", error);
        });
    } else {
      setFormError("لطفاً تمامی فیلدها را به درستی پر کنید");
    }
  };

  return (
    <div>
      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">نام:</label>
          <input
            required
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className={styles.input}
          />
          {nameError && <div className={styles.error}>{nameError}</div>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">ایمیل:</label>
          <input
            required
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={styles.input}
          />
          {emailError && <div className={styles.error}>{emailError}</div>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="score">امتیاز:</label>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <span key={i} onClick={() => handleScoreChange(i + 1)}>
                {i < score ? (
                  <AiFillStar id={styles.star} />
                ) : (
                  <AiOutlineStar />
                )}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="comment">نظر شما:</label>
          <textarea
            required
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            className={styles.textarea}
          />
          {commentError && <div className={styles.error}>{commentError}</div>}
        </div>
        {formError && <div className={styles.error}>{formError}</div>}
        <button type="submit" className={styles.button}>
          ارسال
        </button>
      </form>
      <div className={styles.commentsList}>
        <h2>نظرات</h2>
        {commentsList.map((comment, index) => (
          <div key={index} className={styles.comment}>
            <p>
              <strong>نام:</strong> {comment.name}
            </p>
            <p>
              <strong>ایمیل:</strong> {comment.email}
            </p>
            <p>
              <strong>نظر:</strong> {comment.comment}
            </p>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < comment.score ? (
                    <AiFillStar id={styles.star} />
                  ) : (
                    <AiOutlineStar />
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
