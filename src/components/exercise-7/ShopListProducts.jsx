import { Component } from "react";
import { nanoid } from "nanoid";
import ShopForm from "./ShopForm";
import ShopInfo from "./ShopInfo";

import styles from "./ShopListPropducts.module.scss";

class ShopListProducts extends Component {
  state = { products: [], total: "" };

  addProduct = (data) => {
    this.setState((prevState) => {
      const newProduct = { id: nanoid(), ...data };
      return { products: [...prevState.products, newProduct] };
    });
  };

  totalPriceItems() {
    // const { products, total } = this.state;
    // let sum = 0;
    // products.forEach((el) => {
    //   return (sum += Number(el.price) * Number(el.quantity));
    // });
    // this.setState(() => {});
  }

  render() {
    const { addProduct } = this;
    const { products, total } = this.state;
    const totalPrice = this.totalPriceItems();

    return (
      <>
        <div className={styles.container}>
          <ShopForm onSubmit={addProduct} totaPrice={totalPrice} />
          <ShopInfo products={products} total={total} />
        </div>
      </>
    );
  }
}

export default ShopListProducts;
