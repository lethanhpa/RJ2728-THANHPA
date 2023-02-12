import React, { useState } from "react";
import Styles from "./Accordions.module.css";

type Props = {};

const Accordions = (props: Props) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleAccordions = (index: number) => {
    setToggleState(index);
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.block_accordion}>
        <div className={Styles.container_accordion}>
          <div className={Styles.div_accordion}>
            <button
              className={
                toggleState === 1
                  ? `${Styles["accordion"]} ${Styles["active_accordion"]} ${Styles["active_button_tabs"]}`
                  : `${Styles["active_accordion"]} ${Styles["accordion"]}`
              }
              onClick={() => toggleAccordions(1)}
            >
              SIMPLE PANELS
            </button>
            <div
              className={
                toggleState === 1 ? `${Styles["content"]} ${Styles["active_content"]}`
                : `${Styles["content"]}`
              }
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        <div className={Styles.container_accordion}>
          <div className={Styles.div_accordion}>
            <button
              className={
                toggleState === 2 ? `${Styles["accordion"]} ${Styles["active_accordion"]} ${Styles["active_button_tabs"]}`
                : `${Styles["active_accordion"]} ${Styles["accordion"]}`
              }
              onClick={() => toggleAccordions(2)}
            >
              TOGGELE INFORMATION
            </button>
            <div
              className={
                toggleState === 2 ? `${Styles["content"]} ${Styles["active_content"]}`
                : `${Styles["content"]}`
              }
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        <div className={Styles.container_accordion}>
          <div className={Styles.div_accordion}>
            <button
              className={
                toggleState === 3 ? `${Styles["accordion"]} ${Styles["active_accordion"]} ${Styles["active_button_tabs"]}`
                : `${Styles["active_accordion"]} ${Styles["accordion"]}`
              }
              onClick={() => toggleAccordions(3)}
            >
              NICE TOUCH
            </button>
            <div
              className={
                toggleState === 3 ? `${Styles["content"]} ${Styles["active_content"]}`
                : `${Styles["content"]}`
              }
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordions;
