import styles from "./Products.module.scss";

import { Component } from "react";

import data from "./data.json";

class Products extends Component {
  state = { data, activeIndex: 0 };

  handleClick = (e, index) => {
    console.log(this);
    console.log(index);
    this.setState({ activeIndex: index });
  };

  render() {
    const { handleClick } = this;
    const { data, activeIndex } = this.state;

    return (
      <div className={styles.container}>
        <h3>Список товаров:</h3>
        <ul className={styles.list}>
          {data.map(({ name, id }, index) => {
            const className =
              activeIndex === index
                ? `${styles.item} ${styles.bold}`
                : `${styles.item}`;
            return (
              <li
                className={className}
                key={id}
                onClick={(e) => handleClick(e, index)}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Products;
