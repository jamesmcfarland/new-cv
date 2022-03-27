import styles from "../styles/Home.module.css";

import Landing from "../components/Landing";
import Passions from "../components/Passions";
import Skill from "../components/Skill";
import GetTechSkills from "../data/techskills";
import GetSoftSkills from "../data/softSkills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>James McFarland</title>
      </Head>

      <div>
        <Landing />
        <div className={styles.aboutContainer}>
          <div className={styles.infoContainer}>
            <Passions />
          </div>
          <div className={styles.infoContainer}>
            <Skill title="Tech skills" skills={GetTechSkills()} />
          </div>
          <div className={styles.infoContainer}>
            <Skill title="Soft skills" skills={GetSoftSkills()} />
          </div>
        </div>
      </div>
    </>
  );
}
