import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
import { useState } from 'react';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: '지영',
      company: '없어',
      theme: 'light',
      title: 'software',
      email: 'sldksl@slkd.com',
      message: '짱',
      fileName: '이미지',
      fileURL: '이미지.png',
    },
    {
      id: '2',
      name: '지영',
      company: '없어',
      theme: 'dark',
      title: 'software',
      email: 'sldksl@slkd.com',
      message: '짱',
      fileName: '이미지',
      fileURL: '이미지.png',
    },
    {
      id: '3',
      name: '지영',
      company: '없어',
      theme: 'colorful',
      title: 'software',
      email: 'sldksl@slkd.com',
      message: '짱',
      fileName: '이미지',
      fileURL: null,
    },
  ]);

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
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
