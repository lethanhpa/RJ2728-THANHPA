import React from "react";
import Styles from "./BlockUI3.module.css";
import faceboock from "../assets/image/facebook.png";
import google from "../assets/image/google-plus.png";
import pinterest from "../assets/image/pinterest.png";
import twitter from "../assets/image/twitter.png";

const BlockUI3: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.facebook}>
        <img src={faceboock} alt="Facebook" />
        <div className={Styles.content}>
          <div className="fs-3">Facebook</div>
          <div>5,00,000 Likes</div>
        </div>
      </div>

      <div className={Styles.twitter}>
        <img src={twitter} alt="Twitter" />
        <div className={Styles.content}>
          <div className="fs-3">Twitter</div>
          <div>40,000 Tweets</div>
        </div>
      </div>

      <div className={Styles.google}>
        <img src={google} alt="google" />
        <div className={Styles.content}>
          <div className="fs-3">Google +</div>
          <div>4,60,000 Plus</div>
        </div>
      </div>

      <div className={Styles.pinterest}>
        <img src={pinterest} alt="pinterest" />
        <div className={Styles.content}>
          <div className="fs-3">Pinterest</div>
          <div>34,000 Pins</div>
        </div>
      </div>
    </div>
  );
};

export default BlockUI3;
