import React from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import { useFormContext } from "./FormContext";

const fieldData = [
  {
    name: "longName",
    label: "Nama",
  },
  {
    name: "gender",
    label: "Jenis Kelamin",
  },
  {
    name: "generation",
    label: "Angkatan",
  },
  {
    name: "major",
    label: "Jurusan",
  },
  {
    name: "jalurSukses",
    label: "Jalur Sukses",
  },
  {
    name: "hobby",
    label: "Hobby",
  },
];

const handleMouseEnter = (event) => {
  event.target.style.backgroundColor = "#afeeee"; 
  event.target.style.fontWeight = "bolder";// Ganti "red" dengan warna yang Anda inginkan saat tombol di-hover
};

const handleMouseLeave = (event) => {
  event.target.style.backgroundColor = "#ffc0cb";
  event.target.style.fontWeight = "normal"; // Kembalikan ke warna aslinya saat tidak di-hover
};

function Form() {
  const { formData, setFormData } = useFormContext();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    navigate("/result");
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "judul", style: { color: "#4169e1" } },
      React.createElement("h2", null, "Silahkan Isi Form Berikut ini: ")
    ),
    React.createElement("hr", { color: "black" }),
    React.createElement(
      "div",
{ className: "data", style: {color: "#800080"}},
      fieldData.map((field) =>
        React.createElement(
          "label",
          { key: field.name },
          React.createElement(
            "div",
            { className: field.name },
            `${field.label}:`,
            React.createElement(
              "div",
              { className: `input${field.name}` },
              React.createElement("input", {
                name: field.name,
                value: formData[field.name],
                onChange: handleInputChange,
              })
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "submit" },
        React.createElement(
          "button",
          { onClick: handleSubmit,
            onMouseEnter: handleMouseEnter, // Saat di-hover
            onMouseLeave: handleMouseLeave, 
            style: { backgroundColor: "#ffebcd" } },
          "Submit"
        )
      )
    )
  );
}

export default Form;
