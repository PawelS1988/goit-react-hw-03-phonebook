import React from "react"
import styles from "./ContactsFilter.module.css"

function ContactsFilter({ handleFilterChange }) {
  return (
    <div className={styles.column}>
      <label className={styles.label} htmlFor="filter">
        Find contacts by name{" "}
      </label>
      <input
        className={styles.input}
        required
        type="text"
        name="filter"
        onChange={handleFilterChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Please give me a name."
      />
    </div>
  )
}

export default ContactsFilter
