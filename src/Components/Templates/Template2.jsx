/* eslint-disable react/prop-types */
import styles from './Template2.module.css';
import generatePDF from "../../utils/generatePDF";

export default function Template2({ resumeData }) {

  
const  dateFormat = (date) => {
  if (!date) return ""; 
  const options = { year: "numeric", month: "short" };
  return new Date(date).toLocaleDateString(undefined, options);
}
  return (
    <div>
      <div className={styles.template2}>
      {/* Left Column */}
      <div className={styles.leftColumn}>
        <header className={styles.header}>
          <h1>{resumeData?.name || "Your Name"}</h1>
          <p>{resumeData?.contactDetails || "Your Contact Details"}</p>
          <p>{resumeData?.email || "Your Email"}</p>
          <p>{resumeData?.phone || "Your Phone Number"}</p>
        </header>

        {/* Skills Section */}
        <section className={styles.skillsSection}>
          <h2>Skills</h2>
          {Array.isArray(resumeData?.skills) && resumeData.skills.length > 0 ? (
            <ul className={styles.skills}>
              {resumeData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p>No skills available</p>
          )}
        </section>

        {/* Certificates Section */}
        <section className={styles.section}>
          <h2>Certificates</h2>
          {Array.isArray(resumeData?.certificates) && resumeData.certificates.length > 0 ? (
            resumeData.certificates.map((certificate, index) => (
              <div key={index} className={styles.certificate}>
                <h3>{certificate.name || "Certificate Name"}</h3>
              </div>
            ))
          ) : (
            <p>No certificates available</p>
          )}
        </section>
      </div>

      {/* Right Column */}
      <div className={styles.rightColumn}>
        
        {/* Experience Section */}
        <section className={styles.section}>
          <h2>Experience</h2>
          {Array.isArray(resumeData?.workExperience) && resumeData.workExperience.length > 0 ? (
            resumeData.workExperience.map((job, index) => (
              <div key={index} className={styles.job}>
                <h3>
                  {job.role || "Job Title"} - {job.company || "Company Name"}
                </h3>
                {/* <p>{job.duration}</p> */}
                <p> {dateFormat(job.from)} - {job.currentlyWorking ? "Present" : dateFormat(job.to)}</p>
                <p>{job.workdescription}</p>
              </div>
            ))
          ) : (
            <p>No experience available</p>
          )}
        </section>

        {/* Education Section */}
        <section className={styles.section}>
          <h2>Education</h2>
          {Array.isArray(resumeData?.education) && resumeData.education.length > 0 ? (
            resumeData.education.map((edu, index) => (
              <div key={index} className={styles.education}>
                <h3>
                  {edu.degree || "Degree"} - {edu.institution || "Institution Name"}
                </h3>
                <p>{edu.yearOfPassing || "Year not provided"}</p>
              </div>
            ))
          ) : (
            <p>No education available</p>
          )}
        </section>

        {/* Projects Section */}
        <section className={styles.section}>
          <h2>Projects</h2>
          {Array.isArray(resumeData?.projects) && resumeData.projects.length > 0 ? (
            resumeData.projects.map((project, index) => (
              <div key={index} className={styles.project}>
                <h3>{project.title || "Project Title"}</h3>
                <p>{project.description || "Description not provided"}</p>
                {Array.isArray(project.technologies) && project.technologies.length > 0 ? (
                  <p>
                    <strong>Technologies Used:</strong> {project.technologies.join(", ")}
                  </p>
                ) : (
                  <p>No technologies specified</p>
                )}
              </div>
            ))
          ) : (
            <p>No projects available</p>
          )}
        </section>
      </div> 
    </div>

    <button onClick={generatePDF} className={styles.downloadButton}>
        Download as PDF
      </button>
    </div>
    
  );
}
