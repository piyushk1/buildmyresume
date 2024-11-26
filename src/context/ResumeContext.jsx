/* eslint-disable react/prop-types */
import  { createContext, useState } from 'react';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    education: [],
    experience: [],
    skills: [],
    projects: [],
  });

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};
