import { Component } from "react";

import styles from "./AccordionItem.module.scss";

class AccordionItem extends Component {
  state = { isActive: false };

  handleClick = () => {
    this.setState((prevState) => {
      return { isActive: !prevState.isActive };
    });
  };

  render() {
    const { handleClick } = this;
    const { isActive } = this.state;

    const className = isActive
      ? `${styles.content} ${styles.isExpanded}`
      : `${styles.content}`;

    return (
      <div className={styles.container}>
        <div className={styles.accordion}>
          <div className={styles.accordionItem}>
            <p onClick={handleClick} className={styles.title}>
              First Question
            </p>
            <div className={className}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu interdum diam. Donec interdum porttitor risus non bibendum.
                Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                dignissim arcu nec elit faucibus condimentum. Donec facilisis
                consectetur enim sit amet varius. Pellentesque justo dui,
                sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                ante quis fringilla feugiat, mauris risus condimentum massa, at
                elementum libero quam ac ligula. Pellentesque at rhoncus dolor.
                Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor
                venenatis mauris placerat tristique eget id dolor. Quisque
                blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
                elementum tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccordionItem;
