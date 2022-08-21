import styles from "./ShopListPropducts.module.scss";

import { nanoid } from "nanoid";

const ShopInfo = ({ products = "0", total = "0" }) => {
  return (
    <div>
      <div className={styles.quantity}>
        <h3>Items:</h3>
        <p>{products.length}</p>
      </div>
      <div className={styles.quantity}>
        <h3>Total:</h3>
        <p>{total}</p>
      </div>

      <h3 className={styles.list}>List products:</h3>
      <ul>
        {products.map(({ name }) => {
          return (
            <li key={nanoid()} className={styles.item}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShopInfo;
