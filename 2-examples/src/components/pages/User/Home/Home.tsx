import React from "react";
import styles from "./Home.module.css";
import bigbang3 from "../assets/image/bigbang3.jpg";
import bigbang2 from "../assets/image/bigbang2.jpg";
import bigbang1 from "../assets/image/bigbang1.jpg";
import { Carousel } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <div className={styles.content_about}>
      <div className="row">
        <div className="col-12 col-md-3 col-content text-bg-dark bg-opacity-50">
          <div className="mx-3 border-bottom p-3">
            <h2>Studio albums</h2>
          </div>
          <div className="p-3 mx-3 border-bottom">
            <div>Bigbang Vol.1 (2006)</div>
          </div>
          <div className="p-3 mx-3 border-bottom">
            <div>Number 1 (2008)</div>
          </div>
          <div className="p-3 mx-3 border-bottom">
            <div>Remember (2008)</div>
          </div>
          <div className="p-3 mx-3 border-bottom">
            <div>Big Bang (2009)</div>
          </div>
          <div className="p-3 mx-3 border-bottom">
            <div>Big Bang 2 (2011)</div>
          </div>
          <div className="p-3 mx-3 border-bottom">
            <div>Alive (2012)</div>
          </div>
          <div className="p-3 mx-3 border-bottom">
            <div>Made Series (2016)</div>
          </div>
          <div className="p-3 mx-3 border-bottom">
            <div>Made (2016)</div>
          </div>
        </div>
        <div className="col-12 col-md col-content text-bg-dark bg-opacity-50">
          <h1 className="text-center p-2 fw-bold">BIG BANG</h1>
          <p className="pb-3">
            Big Bang is a South Korean K-pop band. It was founded in 2006 by YG
            Entertainment and consists of the members of the year: G-Dragon,
            T.O.P, Taeyang, Daesung and Seungri. Big Bang has become one of the
            most popular K-pop bands in Korea and around the world. Big Bang has
            also held many billionaire tours around the world and won many music
            awards. Big Bang is known for their epic stage set-ups plus
            choreography, costumes, and stage props. They used to rely mainly on
            street dances but now Big Bang has transformed and performed more
            professional choreography. The group's dances are imitated and
            imitated by young people, for example, the dance that opens the
            shirt to reveal the belly or the dance "jump rope" also attracts
            great attention. The group is also known for taking good control of
            their career and contributing to the music production themselves.
            Jon Caramanica of The New York Times described the Big Bang show in
            New Jersey as "the true wild heart of K-pop", emphasizing their
            brightly colored costumes, choreography, and stage performance. Big
            Bang received both praise and criticism. When entering the Japanese
            market, Time rated them as one of a number of Korean artists
            promising to penetrate the country, while the Korea Times called
            them "Korean pop icons". In 2011, the BBC reported that "K-pop
            bands, including Big Bang, are gaining popularity around the world",
            praising the group's contribution to YG Entertainment's revenue and
            profits.
          </p>

          <Carousel className="carousel slide carousel-fade">
            <Carousel className="carousel-inner">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bigbang3}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bigbang2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={bigbang1}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Carousel>
        </div>
        <div className="col-12 col-md-3 col-content text-bg-dark bg-opacity-50">
          <div className="p-4 text-white">
            <div>
              <h3 className="title">Touring in Korean</h3>
              <p>
                <li>
                  <i>The Real (2006)</i>
                </li>
                <li>
                  <i>Want You Tour (2007)</i>
                </li>
                <li>
                  <i>The Great (2007)</i>
                </li>
                <li>
                  <i>Global Warning Tour (2008)</i>
                </li>
                <li>
                  <i>Big Show 2009 (2009)</i>
                </li>
                <li>
                  <i>Big Show 2010 (2010)</i>
                </li>
                <li>
                  <i>Big Show 2011 (2011)</i>
                </li>
                <li>
                  <i>Big Show 2012 (2012)</i>
                </li>
                <li>
                  <i>Alive Galaxy Tour: The Final In Seoul (2013)</i>
                </li>
                <li>
                  <i>Big Bang+α in Seoul (2014)</i>
                </li>
              </p>
            </div>
            <div>
              <h3 className="title">Touring around the world</h3>
              <p>
                <li>
                  <i>Alive Galaxy Tour (2012)</i>
                </li>
                <li>
                  <i>MADE Tour (2015-2016)</i>
                </li>
              </p>
            </div>
            <div>
              <h3 className="title">Touring with YG Family</h3>
              <p>
                <li>
                  <i>10th Anniversary World Tour (2016)</i>
                </li>
                <li>
                  <i>YG Family in Seoul (2010)</i>
                </li>
                <li>
                  <i>15th Anniversary Tour (2011-2012)</i>
                </li>
                <li>
                  <i>Power World Tour (2014)</i>
                </li>
              </p>
            </div>
            <div>
              <h3 className="title">Touring in Japan</h3>
              <p>
                <li>
                  <i>Stand Up Tour (2008)</i>
                </li>
                <li>
                  <i>Electric Love Tour (2010)</i>
                </li>
                <li>
                  <i>Love and Hope Tour (2011)</i>
                </li>
                <li>
                  <i>YJapan Dome Tour (2013-2014)</i>
                </li>
                <li>
                  <i>Last Dance Tour (2018) [167]</i>
                </li>
                <li>
                  <i>Dome Tour: X (2014-2015)</i>
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-secondary p-2 text-white bg-opacity-75 text-center py-2 mt-4">
        BIGBANG is the symbol of Korean music industry
      </footer>
    </div>
  );
};

export default Home;
