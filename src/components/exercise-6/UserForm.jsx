import styles from "./Form.module.scss";

import { Component } from "react";
import { nanoid } from "nanoid";

class Form extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  state = {
    email: "",
    name: "",
    password: "",
  };

  emailId = nanoid();
  nameId = nanoid();
  passwordId = nanoid();

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      email: "",
      name: "",
      password: "",
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { handleSubmit, handleChange, emailId, nameId, passwordId } = this;
    const { email, name, password } = this.state;

    return (
      <>
        <form onSubmit={handleSubmit}>
          <div>
            <div className={styles.thumb}>
              <label className={styles.label} htmlFor={emailId}>
                Email
              </label>
              <input
                className={styles.input}
                id={emailId}
                onChange={handleChange}
                value={email}
                type="email"
                name="email"
                required
              ></input>
            </div>
            <div className={styles.thumb}>
              <label className={styles.label} htmlFor={nameId}>
                Name
              </label>

              <input
                className={styles.input}
                id={nameId}
                onChange={handleChange}
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                type="text"
                name="name"
                required
              ></input>
            </div>
            <div className={styles.thumb}>
              <label className={styles.label} htmlFor={passwordId}>
                Password
              </label>

              <input
                className={styles.input}
                id={passwordId}
                onChange={handleChange}
                value={password}
                type="password"
                name="password"
                required
              ></input>
            </div>
          </div>
          <button className={styles.btn}>Add</button>
        </form>
      </>
    );
  }
}

export default Form;
