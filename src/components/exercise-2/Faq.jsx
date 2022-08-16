import { Component } from "react";

import styles from "./Faq.module.scss";

class Faq extends Component {
  state = { expand: false };

  handelClickOpen = () => {
    this.setState((prevState) => {
      return { expand: true };
    });
  };

  handelClickClose = () => {
    this.setState((prevState) => {
      return { expand: false };
    });
  };

  render() {
    const { handelClickOpen, handelClickClose } = this;
    const { expand } = this.state;

    let className = expand
      ? `${styles.content} ${styles.isExpanded}`
      : `${styles.content}`;

    return (
      <div className={styles.container}>
        <div className={styles.accordion}>
          <h1>FAQ</h1>
          <button
            onClick={handelClickOpen}
            type="button"
            className={styles.btn}
            id="expand-all"
          >
            Expand All
          </button>
          <button
            onClick={handelClickClose}
            type="button"
            className={styles.btn}
            id="collapse-all"
          >
            Collapse All
          </button>
          <div className={styles.accordionItem}>
            <p className={styles.title}>First Question</p>
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
          <div className={styles.accordionItem}>
            <p className={styles.title}>Second Question</p>
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
          <div className={styles.accordionItem}>
            <p className={styles.title}>Third Question</p>
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
          <div className={styles.accordionItem}>
            <p className={styles.title}>Furth Question</p>
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
          <div className={styles.accordionItem}>
            <p className={styles.title}>Fifth Question</p>
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

export default Faq;
