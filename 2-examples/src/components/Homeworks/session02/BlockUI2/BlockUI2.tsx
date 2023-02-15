import React from "react";
import Styles from "./BlockUI2.module.css"
import android from '../assets/image/android.png'
import apple from '../assets/image/apple.png'
import openbox from '../assets/image/openbox.png'
import basketball from '../assets/image/basketball.png'
import drupal from '../assets/image/drupal.png'
const BlockUI2: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.div__left}>
          <div className={Styles.div__html__left}>
            <img
              className="h-50"
              src={android}
              alt=""
            />
          </div>
          <div className={Styles.text}>HTML</div>
          <div className={Styles.div__right}>
            <div className={Styles.div__html__right}></div>
          </div>
        </div>

        <div className={Styles.div__left}>
            <div className={Styles.div__css__left}>
              <img
                className="h-50"
                src={apple}
                alt=""
              />
            </div>
            <div className={Styles.text}>CSS</div>
            <div className={Styles.div__right}>
              <div className={Styles.div__css__right}></div>
            </div>
          </div>

          <div className={Styles.div__left}>
            <div className={Styles.div__php__left}>
              <img
                className="h-50"
                src={openbox}
                alt=""
              />
            </div>
            <div className={Styles.text}>PHP</div>
            <div className={Styles.div__right}>
              <div className={Styles.div__php__right}></div>
            </div>
          </div>

          <div className={Styles.div__left}>
            <div className={Styles.div__java__left}>
              <img
                className="h-50"
                src={basketball}
                alt=""
              />
            </div>
            <div className={Styles.text}>Java</div>
            <div className={Styles.div__right}>
              <div className={Styles.div__java__right}></div>
            </div>
          </div>

          <div className={Styles.div__left}>
            <div className={Styles.div__net__left}>
              <img
                className="h-50"
                src={drupal}
                alt=""
              />
            </div>
            <div className={Styles.text}>.Net</div>
            <div className={Styles.div__right}>
              <div className={Styles.div__net__right}></div>
            </div>
          </div>
      </div>
    </div>
  )
}
export default BlockUI2;