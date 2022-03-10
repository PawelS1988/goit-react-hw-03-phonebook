import React from 'react'
import styles from './Contacts.module.css'

const Contacts = ({ contacts, filter, deleteContact }) => {
  return (
    <ul className={styles.contacts} style={{ padding: 0 }}>
      {contacts.map(({ id, name, number }) => {
        return name.toLowerCase().includes(filter.toLowerCase()) ? (
          <li key={id} className={styles.contact}>
            {name} {number}
            <button
              className={styles.btn__delete}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ) : null
      })}
    </ul>
  )
}

export default Contacts
