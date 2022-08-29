import styles from "./AccordionItemUp.module.scss";

import { useState } from "react";

export default function AccordionItemUp() {
  const [toggle, setToggle] = useState(false);

  const handleChange = (e) => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.accordion}>
        <div className={styles.accordionItem} onClick={handleChange}>
          <p className={styles.title}>First Question</p>
          {toggle && (
            <div className={styles.content}>
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
          )}
        </div>
      </div>
    </div>
  );
}

const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach((item) =>
  item.addEventListener("click", function ({ target }) {
    if (target.classList.contains("title")) {
      target.classList.toggle("is-expanded");
      const content = this.querySelector(".content");
      content.classList.toggle("is-expanded");
    }
  })
);
