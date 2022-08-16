import styles from "./Products.module.scss";

import { Component } from "react";

class Products extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, index) => {
    this.setState({ activeIndex: index });
  };

  render() {
    const { items } = this.props;
    const { handleClick } = this;
    const { activeIndex } = this.state;

    return (
      <div className={styles.container}>
        <h3>Список товаров:</h3>
        <ul className={styles.list}>
          {items.map(({ name, id }, index) => {
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
