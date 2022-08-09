import React from 'react';
import Card from '../Card/Card';
import styles from './preview.module.css';

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {Object.keys(cards).map((key) => {
          return <Card card={cards[key]} key={key} />;
        })}
      </ul>
    </section>
  );
};

export default Preview;
