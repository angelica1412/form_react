import React from "react";
import { createContext, useContext, useState } from "react";

const FormContext = createContext();
export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    longName: "",
    gender: "",
    generation: "",
    major: "",
    jalurSukses: "",
    hobby: "",
  });

  const clearFormData = () => {
    setFormData({
      longName: "",
      gender: "",
      generation: "",
      major: "",
      jalurSukses: "",
      hobby: "",
    });
  };

  return React.createElement(FormContext.Provider, { value: { formData, setFormData, clearFormData } }, children);
};
