import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Result.css";
import foto from "./foto.jpg";
import { useFormContext } from "./FormContext";

function Result() {
  const location = useLocation();
  const data = location.state;
  const { formData } = useFormContext();
  const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = "red"; // Ganti "red" dengan warna yang Anda inginkan saat tombol di-hover
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = "#7cfc00"; // Kembalikan ke warna aslinya saat tidak di-hover
  };

  const [showFoto, setShowFoto] = useState(false);
  const toggleFotoHandler = () => {
    setShowFoto(!showFoto);
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "judul", style: { color: "blue" } },
      React.createElement("h2", null, "Hasil Inputan")
    ),
    React.createElement(
      "div",
      { className: "gabungan" },
      React.createElement(
        "div",
        { className: "fotoProfile" },
        showFoto
          ? React.createElement("img", {
              src: foto,
              className: "fotodiri",
              alt: "Foto Diri",
            })
          : React.createElement("div", { className: "fotodiri-placeholder" }),
        React.createElement(
          "button",
          {
            className: "showfoto",
            onClick: toggleFotoHandler,
            onMouseEnter: handleMouseEnter, // Saat di-hover
            onMouseLeave: handleMouseLeave, // Saat tidak di-hover
            style: {
              backgroundColor: "#7cfc00",
            },
          },
          showFoto ? "Sembunyikan Foto" : "Tampilkan Foto"
        )
      ),
      React.createElement(
        "div",
        { className: "kanan" },
        React.createElement(
          "p",
          { style: { color: "#cd5c5c" } },
          React.createElement("b", { style: { color: "#7fff00" } }, "Nama:"),
          ` ${formData.longName || "Data tidak tersedia"}`
        ),
        React.createElement(
          "p",
          { style: { color: "#cd5c5c" } },
          React.createElement(
            "b",
            { style: { color: "#7fff00" } },
            "Jenis Kelamin:"
          ),
          ` ${formData.gender || "Data tidak tersedia"}`
        ),
        React.createElement(
          "p",
          { style: { color: "#cd5c5c" } },
          React.createElement(
            "b",
            { style: { color: "#7fff00" } },
            "Angkatan:"
          ),
          ` ${formData.generation || "Data tidak tersedia"}`
        ),
        React.createElement(
          "p",
          { style: { color: "#cd5c5c" } },
          React.createElement("b", { style: { color: "#7fff00" } }, "Jurusan:"),
          ` ${formData.major || "Data tidak tersedia"}`
        ),
        React.createElement(
          "p",
          { style: { color: "#cd5c5c" } },
          React.createElement(
            "b",
            { style: { color: "#7fff00" } },
            "Jalur Sukses:"
          ),
          ` ${formData.jalurSukses || "Data tidak tersedia"}`
        ),
        React.createElement(
          "p",
          { style: { color: "#cd5c5c" } },
          React.createElement("b", { style: { color: "#7fff00" } }, "Hobby:"),
          ` ${formData.hobby || "Data tidak tersedia"}`
        )
      )
    )
  );
}

export default Result;
