import styles from "../styles/Landing.module.css"; 

const Landing = () => {
    return (  <div className={styles.metal}>
        <div className={styles.contentContainer}>
          <div className={styles.landingContent}>
            <h1>James McFarland</h1>
            <h4 className={styles.lowMargin}>
              1<sup>st</sup> year software engineer
            </h4>
            <a
              href="https://qub.ac.uk"
              className={`${styles.qub} ${styles.lowMargin}`}
            >
              <h4 className={styles.lowMargin}>
                queen&apos;s university belfast
              </h4>
            </a>
          </div>
        </div>
      </div> );
}
 
export default Landing;