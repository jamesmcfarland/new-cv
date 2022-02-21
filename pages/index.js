import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }

  return (
    <div>
      <div className={styles.container}>
        <a href="#wow" className={styles.more}>
          <p>{isTouchDevice() ? "tap" : "click"} for more</p>
        </a>
        <div className={styles.content}>
          <h1>James McFarland</h1>
          <h5>
            1<sup>st</sup> year software engineering
          </h5>
          <a href="https://qub.ac.uk" className={styles.qub}>
            <h4>queen&apos;s university belfast</h4>
          </a>
          <div className={styles.socials}>
            <a href="#">
              <p>twitter</p>
            </a>
            <a href="#">
              <p>github</p>
            </a>
            <a href="#">
              <p>mail</p>
            </a>
            <a href="#">
              <p>insta</p>
            </a>
          </div>
        </div>
      </div>
      <div id="wow" className={styles.wow}>
        hello
      </div>
    </div>
  );
}
