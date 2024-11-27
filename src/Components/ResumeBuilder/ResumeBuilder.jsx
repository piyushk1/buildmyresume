import UserDetails from "../UserDetails/UserDetails";
import TemplatePreview from "../TemplatePreview/TemplatePreview";
import styles from "./ResumeBuilder.module.css";
export default function ResumeBuilder() {

  return (
    <div className={styles.resumeBuilder}>
      <div className={styles.userDetails}>
        <UserDetails />
      </div>
      <div className={styles.templatePreview}>
        <TemplatePreview />
      </div>
    </div>
  );
}