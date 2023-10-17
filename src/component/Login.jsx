import styles from "./Login.module.css";
import React from "react";
import logo from "../img/5959_logo.png";

export default function Login() {
  return (
    <>
      <div className={styles.header}>
        <h1>
          <img className={styles.logo} src={logo} alt="오구오구 로고이미지" />
        </h1>
        <h2>내 새꾸 자랑, 네 새꾸 자랑</h2>
      </div>
      <div className={styles.bottom}>
        <button
          className={styles.kakao}
          onClick={() =>
            (window.location.href =
              "https://www.kakaocorp.com/page/service/service/KakaoTalk")
          }
        >
          카카오톡 계정으로 로그인
        </button>
        <button
          className={styles.google}
          onClick={() => (window.location.href = "https://www.google.co.kr/")}
        >
          구글 계정으로 로그인
        </button>
        <button
          className={styles.facebook}
          onClick={() => (window.location.href = "https://www.facebook.com/")}
        >
          페이스북 계정으로 로그인
        </button>
        <button className={styles.email_login}>이메일로 로그인</button>
      </div>
    </>
  );
}
