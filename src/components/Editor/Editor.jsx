import React from 'react';
import CardAddForm from '../CardAddFrom/CardAddForm';
import CardEditForm from '../CardEditFrom/CardEditForm';
import styles from './editor.module.css';

const Editor = ({ cards, addCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => {
        return <CardEditForm key={card.id} card={card} />;
      })}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;
