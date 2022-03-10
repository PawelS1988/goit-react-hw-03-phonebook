import React from "react"
import styles from "./ContactForm.module.css"

const ContactForm = ({ saveNewContact, updateNameOrNumber }) => {
  return (
    <>
      <form className={styles.wrapper} onSubmit={saveNewContact}>
        <div className={styles.column}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            required
            type="text"
            name="name"
            onChange={updateNameOrNumber}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </div>
        <div className={styles.column}>
          <label className={styles.label} htmlFor="number">
            Number
          </label>
          <input
            className={styles.input}
            required
            type="tel"
            name="number"
            onChange={updateNameOrNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
        </div>
        <button className={styles.add__btn}>Add contact</button>
      </form>
    </>
  )
}

export default ContactForm
