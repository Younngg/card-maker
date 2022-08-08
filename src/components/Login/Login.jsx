import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = (userId) => {
    navigate('/maker', { pathname: '/maker', state: { id: userId } });
  };
  const onLogin = (e) => {
    authService //
      .login(e.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.id);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
