import styles from "../styles/About.module.css";

function About() {
  return (
    <>
      <h2>About Page</h2>
      <button className="btn btn-info">Primary</button>
      <p className={styles.highlight}>About page</p>
    </>
  );
}

export default About;
