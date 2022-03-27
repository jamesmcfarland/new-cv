import styles from "../styles/Skills.module.css";

const Skill = ({ title, skills, ...rest }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {skills.map((skill, i) => (
          <li
            key={skill.header}
            className={`${skill.style} ${styles.skill}`}
            style={{ color: i % 2 === 0 ? "#0d324d" : "#7f5a83", listStyleImage: `url("${skill.icon}")` }}
          >
            <header>{skill.header}</header>
            <article>{skill.body}</article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Skill;
