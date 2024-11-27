/* eslint-disable react/prop-types */

import styles from "./Template1.module.css";
import generatePDF from "../../utils/generatePDF";

const  dateFormat = (date) => {
  if (!date) return ""; 
  const options = { year: "numeric", month: "short" };
  return new Date(date).toLocaleDateString(undefined, options);
}

export default function Template1({ resumeData }) {
 
  return (
    <div>
      <div id="resume" className={styles.template1}>
        <header className={styles.header}>
          <h1>{resumeData?.name || "Your Name"}</h1>
          <p>{resumeData?.email || "Your Email"}</p>
          <p>{resumeData?.phone || "Your Phone Number"}</p>
        </header>

        {/* Work Experience Section */}
        <section className={styles.section}>
          {console.log(resumeData)}
          <h2>Work Experience</h2>
          {Array.isArray(resumeData?.workExperience) && resumeData.workExperience.length > 0 ? (
            resumeData.workExperience.map((job, index) => (
              <div key={index} className={styles.job}>
                <h3>
                  {job.role} - {job.company}
                </h3>
                {/* <p>{job.duration}</p> */}
               <p> {dateFormat(job.from)} - {job.currentlyWorking ? "Present" : dateFormat(job.to)}</p>
                <p>{job.workdescription}</p>
              </div>
            ))
          ) : (
            <p>No work experience</p>
          )}
        </section>

        {/* Education Section */}
        <section className={styles.section}>
          <h2>Education</h2>
          {Array.isArray(resumeData?.education) && resumeData.education.length > 0 ? (
            resumeData.education.map((edu, index) => (
              <div key={index} className={styles.education}>
                <h3>
                  {edu.degree} - {edu.institution}
                </h3>
                <p>{edu.yearOfPassing}</p>
              </div>
            ))
          ) : (
            <p>No education available</p>
          )}
        </section>

        {/* Skills Section */}
        <section className={styles.section}>
          <h2>Skills</h2>
          {Array.isArray(resumeData?.skills) && resumeData.skills.length > 0 ? (
            <ul className={styles.skills}>
              {resumeData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p>No skills data available</p>
          )}
        </section>

        {/* Certificates Section */}
        <section className={styles.section}>
          <h2>Certificates</h2>
          {Array.isArray(resumeData?.certificates) && resumeData.certificates.length > 0 ? (
            resumeData.certificates.map((certificate, index) => (
              <div key={index} className={styles.certificate}>
                <h3>{certificate.name}</h3>
              </div>
            ))
          ) : (
            <p>No certificates data available</p>
          )}
        </section>

        {/* Projects Section */}
        <section className={styles.section}>
          <h2>Projects</h2>
          {Array.isArray(resumeData?.projects) && resumeData.projects.length > 0 ? (
            resumeData.projects.map((project, index) => (
              <div key={index} className={styles.project}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {Array.isArray(project.technologies) && project.technologies.length > 0 && (
                  <p>
                    <strong>Technologies Used:</strong> {project.technologies.join(", ")}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p>No projects data available</p>
          )}
        </section>
      </div>

      <button onClick={generatePDF} className={styles.downloadButton}>
        Download as PDF
      </button>
    </div>
  );
}
