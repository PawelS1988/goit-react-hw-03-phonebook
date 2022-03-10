import ContactsFilter from "./ContactsFilter/ContactsFilter";
import ContactForm from "./ContactForm/ContactForm";
import Contacts from "./Contacts/Contacts";
import styles from "./Phonebook.module.css";
import { nanoid } from "nanoid";
import React from "react";

export class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-22", name: "hermione kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: this.props.name,
    number: "",
    filter: "",
  };

  ifNameInContacts = (inputName) =>
    !this.state.contacts.every(({ name }) => name !== inputName);

  updateNameOrNumber = (event) => {
    if (this.ifNameInContacts(event.target.value)) {
      alert(`${event.target.value} is alredy in contacts.`);
    }
    this.setState(
      event.target.name === "name"
        ? { name: event.target.value }
        : { number: event.target.value }
    );
  };

  saveNewContact = (event) => {
    event.preventDefault();

    this.setState(({ name, number, contacts }) => {
      if (name === "") return;
      return {
        contacts: [...contacts, { id: nanoid(), name, number }],
        name: "",
      };
    });
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = (idx) => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(({ id }) => id !== idx) };
    });
  };

  saveContactsInLocalStorage = () => {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  };

  componentDidMount() {
    // if (this.state.name === "") return
    let storageContacts = localStorage.getItem("contacts");

    storageContacts
      ? this.setState({ contacts: JSON.parse(storageContacts) })
      : this.saveContactsInLocalStorage();
  }

  componentDidUpdate() {
    this.saveContactsInLocalStorage();
  }

  render() {
    return (
      <section className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm
          saveNewContact={this.saveNewContact}
          updateNameOrNumber={this.updateNameOrNumber}
        />

        <h2 className={styles.title} style={{ marginBottom: 0 }}>
          Contacts
        </h2>
        <ContactsFilter handleFilterChange={this.handleFilterChange} />
        <Contacts {...this.state} deleteContact={this.deleteContact} />
      </section>
    );
  }
}

export default Phonebook;
