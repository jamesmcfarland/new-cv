import { useEffect, useState } from "react";
import styles  from "../styles/Passions.module.css";

const Passions = () => {
    const [securityText, setsecurityText] = useState("security");

    useEffect(() => {
        console.log(styles.privacyLi);
      setInterval(() => {
        let sectext = "security";
        const index = Math.floor(Math.random() * sectext.length);
  
        setsecurityText(
          sectext.substring(0, index) + "●" + sectext.substring(index + 1)
        );
      }, 1000);
    }, []);
  return (
   <div className={styles.passion}>
      <h2>Passionate about:</h2>
      <ul>
        <li className={styles.securityLi}>{securityText}</li>
        <li className={styles.privacyLi}>
          <del>priv</del>acy
        </li>
        <li className={styles.impactLi}>
          making a lasting <span>impact</span>
        </li>
        <li className={styles.f1Li}>formula one</li>
      </ul>
    </div>
  );
};

export default Passions;
