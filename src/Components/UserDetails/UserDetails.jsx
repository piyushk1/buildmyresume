import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import styles from "./UserDetails.module.css";
import Select from "react-select";

export default function UserDetails() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [expandedSection, setExpandedSection] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleSection = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  const saveEntry = (section, index) => {
    const updatedResumeData = { ...resumeData };

    const updatedSection = [...updatedResumeData[section]];

    const entry = updatedSection[index];
    console.log(`Saving entry:`, entry);

    localStorage.setItem("resumeData", JSON.stringify(updatedResumeData));
  };

  // Add Education
  const addNewEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...(prev.education || []),
        { institution: "", degree: "", yearOfPassing: "" },
      ],
    }));
  };

  const updateEducationField = (index, field, value) => {
    setResumeData((prev) => {
      const updatedEducation = [...prev.education];
      updatedEducation[index][field] = value;
      return { ...prev, education: updatedEducation };
    });
  };

  const removeEducation = (index) => {
    setResumeData((prev) => {
      const updatedEducation = [...prev.education];
      updatedEducation.splice(index, 1);
      return { ...prev, education: updatedEducation };
    });
  };

  const addNewWorkExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      workExperience: [
        ...(prev.workExperience || []),
        {
          company: "",
          role: "",
          from: null,
          to: null,
          currentlyWorking: false,
          workdescription: "",
        },
      ],
    }));
  };

  const updateWorkField = (index, field, value) => {
    setResumeData((prev) => {
      const updatedWorkExperience = [...prev.workExperience];
      updatedWorkExperience[index][field] = value;
      if (field === "currentlyWorking" && value) {
        updatedWorkExperience[index].to = null; // Clear the 'To' date if currently working
      }
      return { ...prev, workExperience: updatedWorkExperience };
    });
  };

  const removeWorkExperience = (index) => {
    setResumeData((prev) => {
      const updatedWorkExperience = [...prev.workExperience];
      updatedWorkExperience.splice(index, 1);
      return { ...prev, workExperience: updatedWorkExperience };
    });
  };

  // Add Certificates
  const addNewCertificate = () => {
    setResumeData((prev) => ({
      ...prev,
      certificates: [
        ...(prev.certificates || []),
        { name: "" }, // Only Certificate Name field
      ],
    }));
  };

  const updateCertificateField = (index, field, value) => {
    setResumeData((prev) => {
      const updatedCertificates = [...prev.certificates];
      updatedCertificates[index][field] = value;
      return { ...prev, certificates: updatedCertificates };
    });
  };

  const removeCertificate = (index) => {
    setResumeData((prev) => {
      const updatedCertificates = [...prev.certificates];
      updatedCertificates.splice(index, 1);
      return { ...prev, certificates: updatedCertificates };
    });
  };

  // Add Projects
  const addNewProject = () => {
    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...(prev.projects || []),
        { title: "", description: "", technologies: "" },
      ],
    }));
  };

  const updateProjectField = (index, field, value) => {
    setResumeData((prev) => {
      const updatedProjects = [...prev.projects];
      updatedProjects[index][field] = value;
      return { ...prev, projects: updatedProjects };
    });
  };

  const removeProject = (index) => {
    setResumeData((prev) => {
      const updatedProjects = [...prev.projects];
      updatedProjects.splice(index, 1);
      return { ...prev, projects: updatedProjects };
    });
  };

  const saveAllData = () => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  };

  // Reset Data functionality
  const resetData = () => {
    setResumeData({});
    localStorage.removeItem("resumeData");
  };

  const technologyOptions = [
    { label: "JavaScript", value: "javascript" },
    { label: "React", value: "react" },
    { label: "Node.js", value: "nodejs" },
    { label: "MongoDB", value: "mongodb" },
    { label: "CSS", value: "css" },
    { label: "HTML", value: "html" },
    { label: "Python", value: "python" },
    { label: "Django", value: "django" },
    { label: "Flask", value: "flask" },
    { label: "Java", value: "java" },
    { label: "Spring Boot", value: "springboot" },
    { label: "TypeScript", value: "typescript" },
  ];

  return (
    <div className={styles.userDetailsForm}>
      <h2>Enter Your Details</h2>

      {/* Personal Details */}
      <div className={styles.section}>
        <h3 onClick={() => toggleSection("personal")}>Personal Details</h3>
        {expandedSection === "personal" && (
          <div className={styles.collapsibleContent}>
            <div className={styles.formGroup}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={resumeData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={resumeData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={resumeData.phone}
                onChange={handleInputChange}
              />

           
            </div>
          </div>
        )}
      </div>
      {/* Skills */}
      <div className={styles.section}>
        <h3 onClick={() => toggleSection("skills")}>Skills</h3>
        {expandedSection === "skills" && (
          <div className={styles.collapsibleContent}>
            <div className={styles.formGroup}>
              <label>Add Skills:</label>
              <Select
                isMulti
                name="skills"
                options={[
                  { value: "JavaScript", label: "JavaScript" },
                  { value: "React", label: "React" },
                  { value: "Node.js", label: "Node.js" },
                  { value: "Python", label: "Python" },
                  { value: "CSS", label: "CSS" },
                  { value: "HTML", label: "HTML" },
                  { value: "Git", label: "Git" },
                  { value: "Java", label: "Java" },
                  { value: ".Net", label: ".Net" },
                  { value: "Next.js", label: "Next.js" },
                ]}
                className={styles.multiSelect}
                classNamePrefix="select"
                value={(resumeData.skills || []).map((skill) => ({
                  value: skill,
                  label: skill,
                }))}
                onChange={(selectedOptions) => {
                  setResumeData((prev) => ({
                    ...prev,
                    skills: selectedOptions.map((option) => option.value),
                  }));
                }}
                placeholder="Select your skills"
              />
            </div>

            <div className={styles.skillsList}>
              {resumeData.skills?.map((skill, index) => (
                <div key={index} className={styles.skillRow}>
                  <h4>{skill}</h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Education Section */}
      <div className={styles.section}>
        <h3 onClick={() => toggleSection("education")}>Education</h3>
        {expandedSection === "education" && (
          <div className={styles.collapsibleContent}>
            {resumeData.education?.map((edu, index) => (
              <div key={index} className={styles.educationEntry}>
                <h4>Education {index + 1}</h4>
                <div className={styles.formGroup}>
                  <div className={styles.formGroup}>
                    <label>Degree:</label>
                    <input
                      type="text"
                      name="degree"
                      value={edu.degree}
                      onChange={(e) =>
                        updateEducationField(index, "degree", e.target.value)
                      }
                    />
                  </div>
                  <label>Institution:</label>
                  <input
                    type="text"
                    name="institution"
                    value={edu.institution}
                    onChange={(e) =>
                      updateEducationField(index, "institution", e.target.value)
                    }
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Year of Passing:</label>
                  <input
                    type="number"
                    name="yearOfPassing"
                    value={edu.yearOfPassing}
                    onChange={(e) =>
                      updateEducationField(
                        index,
                        "yearOfPassing",
                        e.target.value
                      )
                    }
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeEducation(index)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
                <button
                  type="button"
                  onClick={() => saveEntry("education", index)}
                  className={styles.saveButton}
                >
                  Save
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addNewEducation}
              className={styles.addButton}
            >
              Add Education
            </button>
          </div>
        )}
      </div>
      {/* Work Experience Section */}
      <div className={styles.section}>
        <h3 onClick={() => toggleSection("work")}>Work Experience</h3>
        {expandedSection === "work" && (
          <div className={styles.collapsibleContent}>
            {resumeData.workExperience?.map((work, index) => (
              <div key={index} className={styles.workEntry}>
                <h4>Work Experience {index + 1}</h4>
                <div className={styles.formGroup}>
                  <label>Role:</label>
                  <input
                    type="text"
                    name="role"
                    value={work.role}
                    onChange={(e) =>
                      updateWorkField(index, "role", e.target.value)
                    }
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Company:</label>
                  <input
                    type="text"
                    name="company"
                    value={work.company}
                    onChange={(e) =>
                      updateWorkField(index, "company", e.target.value)
                    }
                  />
                </div>

                <div className={styles.dateGroup}>
                  <div className={styles.formGroup}>
                    <label>From:</label>
                    <DatePicker
                      value={work.from ? dayjs(work.from) : null}
                      onChange={(date) => updateWorkField(index, "from", date)}
                      format="DD/MM/YYYY"
                      renderInput={(params) => (
                        <input {...params} placeholder="Select Start Date" />
                      )}
                    />
                  </div>
                  {!work.currentlyWorking && (
                    <div className={styles.formGroup}>
                      <label>To:</label>
                      <DatePicker
                        value={work.to ? dayjs(work.to) : null}
                        onChange={(date) => updateWorkField(index, "to", date)}
                        format="DD/MM/YYYY"
                        renderInput={(params) => (
                          <input {...params} placeholder="Select End Date" />
                        )}
                      />
                    </div>
                  )}
                  <div className={styles.checkboxGroup}>
                    <label>
                      <input
                        type="checkbox"
                        checked={work.currentlyWorking}
                        onChange={(e) =>
                          updateWorkField(
                            index,
                            "currentlyWorking",
                            e.target.checked
                          )
                        }
                      />
                      Currently Working
                    </label>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>description:</label>
                  <textarea
                    name="workdescription"
                    rows="3"
                    value={work.workdescription}
                    onChange={(e) =>
                      updateWorkField(index, "workdescription", e.target.value)
                    }
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeWorkExperience(index)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
                <button
                  type="button"
                  onClick={() => saveEntry("workExperience", index)}
                  className={styles.saveButton}
                >
                  Save
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addNewWorkExperience}
              className={styles.addButton}
            >
              Add Work Experience
            </button>
          </div>
        )}
      </div>
      {/* Certificates Section */}
      <div className={styles.section}>
        <h3 onClick={() => toggleSection("certificates")}>Certificates</h3>
        {expandedSection === "certificates" && (
          <div className={styles.collapsibleContent}>
            {resumeData.certificates?.map((cert, index) => (
              <div key={index} className={styles.certificateEntry}>
                <h4>Certificate {index + 1}</h4>
                <div className={styles.formGroup}>
                  <label>Certificate Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={cert.name}
                    onChange={(e) =>
                      updateCertificateField(index, "name", e.target.value)
                    }
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeCertificate(index)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
                <button
                  type="button"
                  onClick={() => saveEntry("certificates", index)}
                  className={styles.saveButton}
                >
                  Save
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addNewCertificate}
              className={styles.addButton}
            >
              Add Certificate
            </button>
          </div>
        )}
      </div>
      <div className={styles.section}>
        <h3 onClick={() => toggleSection("projects")}>Projects</h3>
        {expandedSection === "projects" && (
          <div className={styles.collapsibleContent}>
            {resumeData.projects?.map((project, index) => (
              <div key={index} className={styles.projectEntry}>
                <h4>Project {index + 1}</h4>
                <div className={styles.formGroup}>
                  <label>Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={project.title}
                    onChange={(e) =>
                      updateProjectField(index, "title", e.target.value)
                    }
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Description:</label>
                  <textarea
                    name="description"
                    rows="3"
                    value={project.description}
                    onChange={(e) =>
                      updateProjectField(index, "description", e.target.value)
                    }
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Technologies:</label>
                  <Select
                    isMulti
                    name="technologies"
                    options={technologyOptions}
                    value={technologyOptions.filter((option) =>
                      project.technologies.includes(option.value)
                    )}
                    onChange={(selectedOptions) => {
                      const selectedTechnologies = selectedOptions.map(
                        (option) => option.value
                      );
                      updateProjectField(
                        index,
                        "technologies",
                        selectedTechnologies
                      );
                    }}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeProject(index)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
                <button
                  type="button"
                  onClick={() => saveEntry("projects", index)}
                  className={styles.saveButton}
                >
                  Save
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addNewProject}
              className={styles.addButton}
            >
              Add Project
            </button>
          </div>
        )}
      </div>
      <div className={styles.buttons}>
        <button
          type="button"
          onClick={resetData}
          className={styles.resetButton}
        >
          Reset Data
        </button>
        <button
          type="button"
          onClick={saveAllData}
          className={styles.saveButton}
        >
          Save Data
        </button>
      </div>
    </div>
  );
}
