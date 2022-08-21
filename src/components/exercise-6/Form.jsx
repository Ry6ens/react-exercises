import styles from "./Form.module.scss";

import { nanoid } from "nanoid";
import { Component } from "react";

import UserForm from "./UserForm";
import UserInfo from "./UserInfo";

class Form extends Component {
  state = { users: [] };

  addContact = (data) => {
    this.setState((prevState) => {
      const newUser = { id: nanoid(), ...data };
      return { users: [...prevState.users, newUser] };
    });
  };

  render() {
    const { addContact } = this;
    const { users } = this.state;

    return (
      <div className={styles.container}>
        <UserForm onSubmit={addContact} />
        <UserInfo items={users} />
      </div>
    );
  }
}

export default Form;
