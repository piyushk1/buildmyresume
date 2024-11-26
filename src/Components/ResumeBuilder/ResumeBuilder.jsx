// import { useContext } from "react";
// import { ThemeContext } from "../../context/ThemeContext";
import UserDetails from "../UserDetails/UserDetails";
import TemplatePreview from "../TemplatePreview/TemplatePreview";
import styles from "./ResumeBuilder.module.css";

export default function ResumeBuilder() {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.resumeBuilder}>
      <div className={styles.userDetails}>
        {/* <button onClick={toggleTheme} className={styles.themeButton}>
          Toggle to {theme === "light" ? "Dark" : "Light"} Theme
        </button> */}
        <UserDetails />
      </div>
      <div className={styles.templatePreview}>
        <TemplatePreview />
      </div>
    </div>
  );
}
