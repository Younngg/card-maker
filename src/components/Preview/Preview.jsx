import React from 'react';
import Card from '../Card/Card';
import styles from './preview.module.css';

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </ul>
    </section>
  );
};

export default Preview;
