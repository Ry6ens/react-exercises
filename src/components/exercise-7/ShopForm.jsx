import styles from "./ShopListPropducts.module.scss";

import { Component } from "react";
import { nanoid } from "nanoid";

class ShopForm extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  state = { name: "", quantity: "", price: "", checkBox: "", type: "" };

  nameId = nanoid();
  quantityId = nanoid();
  priceId = nanoid();
  checkboxId = nanoid();
  typeId = nanoid();

  handleSubmit = (e) => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit({ ...this.state });

    this.reset(e);
  };

  reset(e) {
    const elist = e.target;
    for (const el of elist) {
      el.checked = false;
    }

    this.setState({
      name: "",
      quantity: "",
      price: "",
      checkBox: "",
      type: "",
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleCheckbox = ({ target }) => {
    this.setState({ checkBox: target.checked });
  };

  render() {
    const {
      handleSubmit,
      handleChange,
      handleCheckbox,
      nameId,
      quantityId,
      priceId,
      checkboxId,
      typeId,
    } = this;
    const { name, quantity, price, checkBox, type } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <div className={styles.thumb}>
          <label htmlFor={nameId} className={styles.label}>
            Name
          </label>
          <input
            id={nameId}
            type="text"
            onChange={handleChange}
            className={styles.input}
            name="name"
            value={name}
            required
          />
        </div>
        <div className={styles.thumb}>
          <label htmlFor={quantityId} className={styles.label}>
            Quantity
          </label>
          <input
            id={quantityId}
            type="number"
            onChange={handleChange}
            className={styles.input}
            name="quantity"
            value={quantity}
            required
          />
        </div>
        <div className={styles.thumb}>
          <label htmlFor={priceId} className={styles.label}>
            Price
          </label>
          <input
            id={priceId}
            type="number"
            onChange={handleChange}
            className={styles.input}
            name="price"
            value={price}
            required
          />
        </div>
        <div className={styles.delivery}>
          <label htmlFor={checkboxId} className={styles.inputDelivery}>
            Prime delivery
          </label>
          <input
            id={checkboxId}
            type="checkbox"
            onChange={handleCheckbox}
            name="checkbox"
            value={checkBox}
          />
        </div>
        <div className={styles.thumb}>
          <label htmlFor={typeId} className={styles.label}>
            Choose a category:
          </label>
          <select
            id={typeId}
            className={styles.input}
            value={type}
            onChange={handleChange}
            name="type"
            required
          >
            <option value="">--Please choose an option--</option>
            <option value="Household chemicals">Household chemicals</option>
            <option value="Food">Food</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button className={styles.btn}>Add product</button>
      </form>
    );
  }
}

export default ShopForm;
