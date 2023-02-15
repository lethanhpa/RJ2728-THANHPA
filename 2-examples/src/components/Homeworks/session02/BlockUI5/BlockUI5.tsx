import React from "react";
import Styles from "./BlockUI5.module.css";
import calendar from "../assets/image/calendar.png";
import heart from "../assets/image/heart.png";
import graduation_cap from "../assets/image/graduation_cap.png";
import location from "../assets/image/location.png";
import message from "../assets/image/message.png";
import messi from "../assets/image/messi.jpg";
import ronaldo from "../assets/image/ronaldo.jpg";
import call from "../assets/image/call.png";
import neymar from "../assets/image/neymar.jpg";
import mbappe from "../assets/image/mbappe.jpg";

const BlockUI6: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.title}>
          <img className={Styles.div__img} src={ronaldo} alt="ronaldo" />
          <div className={Styles.div__name}>Cristiano Ronaldo</div>
          <div className={Styles.div__country}>Manchester United</div>
        </div>
        <div className={Styles.parrent}>
          <img className={Styles.div__icon} src={calendar} alt="calendar" />
          <div className={Styles.div__left}>DOB</div>
          <div className={Styles.div__right__ronaldo}>05/02/1985</div>
        </div>
        <hr />
        <div className={Styles.percent}>
          <img className={Styles.div__icon} src={heart} alt="heart" />
          <div className={Styles.div__left}>BG</div>
          <div className={Styles.div__right__ronaldo}>A+</div>
        </div>
        <hr />
        <div className={Styles.percent}>
          <img
            className={Styles.div__icon}
            src={graduation_cap}
            alt="graduation cap"
          />
          <div className={Styles.div__left}>EDU</div>
          <div className={Styles.div__right__ronaldo}>MCA</div>
        </div>
        <hr />
        <div className={Styles.percent}>
          <img className={Styles.div__icon} src={location} alt="location" />
          <div className={Styles.div__left}>RES</div>
          <div className={Styles.div__right__ronaldo}>Portugal</div>
        </div>
        <hr />
        <div className={Styles.div__email__ronaldo}>
          <div className={Styles.div__email}>
            {" "}
            <br />
            <div className={Styles.pl_2}>EMAIL ID</div>
            <div className="d-flex p-2">
              <img src={message} alt="message" />
              <div className={Styles.pl_2}>ronaldo85@gmail.com</div>
            </div>
          </div>
        </div>
        <div className={Styles.div__phone__ronaldo}>
          <div className={Styles.div__phone}>
            {" "}
            <br />
            <div className={Styles.pl_2}>PHONE NO</div>
            <div className="d-flex p-2">
              <img src={call} alt="phone" />
              <div className={Styles.pl_2}>8665543219</div>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.content}>
        <div className={Styles.title}>
          <img className={Styles.div__img} src={messi} alt="messi" />
          <div className={Styles.div__name}>Lionel Messi</div>
          <div className={Styles.div__country}>Paris Saint-Germain</div>
        </div>
        <div className={Styles.parrent}>
          <img className={Styles.div__icon} src={calendar} alt="calendar" />
          <div className={Styles.div__left}>DOB</div>
          <div className={Styles.div__right__messi}>24/06/1987</div>
        </div>
        <hr />
        <div className={Styles.percent}>
          <img className={Styles.div__icon} src={heart} alt="heart" />
          <div className={Styles.div__left}>BG</div>
          <div className={Styles.div__right__messi}>A+</div>
        </div>
        <hr />
        <div className={Styles.percent}>
          <img
            className={Styles.div__icon}
            src={graduation_cap}
            alt="graduation cap"
          />
          <div className={Styles.div__left}>EDU</div>
          <div className={Styles.div__right__messi}>MCA</div>
        </div>
        <hr />
        <div className={Styles.percent}>
          <img className={Styles.div__icon} src={location} alt="location" />
          <div className={Styles.div__left}>RES</div>
          <div className={Styles.div__right__messi}>Argentina</div>
        </div>
        <hr />
        <div className={Styles.div__email__messi}>
          <div className={Styles.div__email}>
            {" "}
            <br />
            <div className={Styles.pl_2}>EMAIL ID</div>
            <div className="d-flex p-2">
              <img src={message} alt="message" />
              <div className={Styles.pl_2}>messi87@gmail.com</div>
            </div>
          </div>
        </div>
        <div className={Styles.div__phone__messi}>
          <div className={Styles.div__phone}>
            {" "}
            <br />
            <div className={Styles.pl_2}>PHONE NO</div>
            <div className="d-flex p-2">
              <img src={call} alt="phone" />
              <div className={Styles.pl_2}>8225543219</div>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.content}>
        <div className={Styles.title}>
          <img className={Styles.div__img} src={neymar} alt="Neymar" />
          <div className={Styles.div__name}>Neymar JR</div>
          <div className={Styles.div__country}>Paris Saint-Germain</div>
        </div>
        <div className={Styles.parrent}>
          <img className={Styles.div__icon} src={calendar} alt="calendar" />
          <div className={Styles.div__left}>DOB</div>
          <div className={Styles.div__right__neymar}>05/02/1992</div>
        </div>
        <hr />
        <div className={Styles.percent}>
          <img className={Styles.div__icon} src={heart} alt="heart" />
          <div className={Styles.div__left}>BG</div>
          <div className={Styles.div__right__neymar}>A+</div>
        </div>
        <hr />
        <div className={Styles.percent}>
          <img
            className={Styles.div__icon}
            src={graduation_cap}
            alt="graduation cap"
          />
          <div className={Styles.div__left}>EDU</div>
          <div className={Styles.div__right__neymar}>MCA</div>
        </div>
        <hr />
        <div className={Styles.percent}>
          <img className={Styles.div__icon} src={location} alt="location" />
          <div className={Styles.div__left}>RES</div>
          <div className={Styles.div__right__neymar}>Brasil</div>
        </div>
        <hr />
        <div className={Styles.div__email__neymar}>
          <div className={Styles.div__email}>
            {" "}
            <br />
            <div className={Styles.pl_2}>EMAIL ID</div>
            <div className="d-flex p-2">
              <img src={message} alt="message" />
              <div className={Styles.pl_2}>neymar92@gmail.com</div>
            </div>
          </div>
        </div>
        <div className={Styles.div__phone__neymar}>
          <div className={Styles.div__phone}>
            {" "}
            <br />
            <div className={Styles.pl_2}>PHONE NO</div>
            <div className="d-flex p-2">
              <img src={call} alt="phone" />
              <div className={Styles.pl_2}>8225543929</div>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.content}>
        <div className={Styles.title}>
          <img className={Styles.div__img} src={mbappe} alt="mbappe" />
          <div className={Styles.div__name}>Kylian Mbappé</div>
          <div className={Styles.div__country}>Paris Saint-Germain</div>
        </div>
        <div className={Styles.parrent}>
          <img className={Styles.div__icon} src={calendar} alt="calendar" />
          <div className={Styles.div__left}>DOB</div>
          <div className={Styles.div__right__mbappe}>20/12/1998</div>
        </div>
        <hr />
        <div className={Styles.percent}>
          <img className={Styles.div__icon} src={heart} alt="heart" />
          <div className={Styles.div__left}>BG</div>
          <div className={Styles.div__right__mbappe}>A+</div>
        </div>
        <hr />
        <div className={Styles.percent}>
          <img
            className={Styles.div__icon}
            src={graduation_cap}
            alt="graduation cap"
          />
          <div className={Styles.div__left}>EDU</div>
          <div className={Styles.div__right__mbappe}>MCA</div>
        </div>
        <hr />
        <div className={Styles.percent}>
          <img className={Styles.div__icon} src={location} alt="location" />
          <div className={Styles.div__left}>RES</div>
          <div className={Styles.div__right__mbappe}>France</div>
        </div>
        <hr />
        <div className={Styles.div__email__mbappe}>
          <div className={Styles.div__email}>
            {" "}
            <br />
            <div className={Styles.pl_2}>EMAIL ID</div>
            <div className="d-flex p-2">
              <img src={message} alt="message" />
              <div className={Styles.pl_2}>mbappe98@gmail.com</div>
            </div>
          </div>
        </div>
        <div className={Styles.div__phone__mbappe}>
          <div className={Styles.div__phone}>
            {" "}
            <br />
            <div className={Styles.pl_2}>PHONE NO</div>
            <div className="d-flex p-2">
              <img src={call} alt="phone" />
              <div className={Styles.pl_2}>9937924265</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlockUI6;
