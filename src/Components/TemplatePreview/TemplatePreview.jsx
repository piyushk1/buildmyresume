import { useContext, useState } from 'react';
import { ResumeContext } from '../../context/ResumeContext';
import Template1 from '../Templates/Template1';
import Template2 from '../Templates/Template2';
import styles from './TemplatePreview.module.css';

export default function TemplatePreview() {
  const { resumeData } = useContext(ResumeContext);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className={styles.templatePreview}>
      <h2>Resume Preview</h2>
      <div className={styles.templates}>
        <button onClick={() => handleTemplateSelect('template1')}>Template 1</button>
        <button onClick={() => handleTemplateSelect('template2')}>Template 2</button>
      </div>

      {/* Render selected template with resume data */}
      {selectedTemplate === 'template1' && <Template1 resumeData={resumeData} />}
      {selectedTemplate === 'template2' && <Template2 resumeData={resumeData} />}
    </div>
  );
}
