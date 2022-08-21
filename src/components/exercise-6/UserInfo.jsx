import styles from "./Form.module.scss";

import { nanoid } from "nanoid";

const UserInfo = ({ items }) => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Password</th>
          </tr>
        </thead>

        {items.map(({ email, name, password }) => {
          return (
            <tr key={nanoid}>
              <td className={styles.td}>{name}</td>
              <td className={styles.td}>{email}</td>
              <td className={styles.td}>{password}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default UserInfo;
