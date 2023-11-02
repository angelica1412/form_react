import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Form from "./Form";
import Result from "./Result";
import "./App.css";
import { FormProvider } from "./FormContext"; // Import FormProvider

export default function App() {
  return (
    <Router>
      <FormProvider> {/* Tambahkan FormProvider di sini */}
        <div>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/result">Result</Link>
              </li>
              <li>
                <Link to="/">Form</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
      </FormProvider>
    </Router>
  );
}