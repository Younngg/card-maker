import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

const Maker = ({ authService }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
