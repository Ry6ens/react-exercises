import { Component } from "react";

import styles from "./Boys.module.scss";

import data from "./data.json";

class Boys extends Component {
  state = {
    data,
  };

  handleClick(e) {
    e.target.remove();
  }

  render() {
    const { handleClick } = this;
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          {data.map(({ name, id }) => {
            return (
              <li className={styles.item} key={id} onClick={handleClick}>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Boys;
