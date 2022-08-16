import { Component } from "react";
import TabsText from "./TabsText";

import styles from "./Tabs.module.scss";

class Tabs extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, index) => {
    // const text2 = document.querySelectorAll("div.Tabs_tabs__content__98N19");
    // console.log(text2);
    // console.log(e);
    // console.log(e.target.parentElement);
    // console.log(e.target.closest("div.tabs").find("tabs__content"));
    this.setState({ activeIndex: index });
  };

  render() {
    const { activeIndex } = this.state;
    const { handleClick } = this;
    const title = [
      "Первая вкладка",
      "Вторая вкладка",
      "Третья вкладка",
      "Четвертая вкладка",
    ];

    return (
      <div className={styles.container}>
        <div className={styles.tabs}>
          <ul className={styles.tabs__caption}>
            {title.map((el, index) => {
              const className =
                activeIndex === index ? `${styles.active}` : `${styles}`;

              return (
                <li
                  className={className}
                  key={index + 1}
                  onClick={(e) => handleClick(e, index)}
                >
                  {el}
                </li>
              );
            })}
          </ul>
          <TabsText activeIndex={this.state.activeIndex} />
        </div>
      </div>
    );
  }
}

export default Tabs;
