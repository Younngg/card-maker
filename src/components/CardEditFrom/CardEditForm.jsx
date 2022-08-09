import React from 'react';
import Button from '../Button/Button';
import ImageFileInput from '../ImageFileInput/ImageFileInput';
import styles from './cardEditForm.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } = card;

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input className={styles.input} type='text' name='name' value={name} />
      <input className={styles.input} type='text' name='company' value={company} />
      <select className={styles.select} name='theme' value={theme}>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input className={styles.input} type='text' name='title' value={title} />
      <input className={styles.input} type='text' name='email' value={email} />
      <textarea className={styles.textarea} name='message' value={message}></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;