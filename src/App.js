import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CandidatesPage from "clean/pages/candidates/CandidatePage.jsx";
import CompaniesPage from "clean/pages/companies/CompaniesPage.jsx";
import GlobalStyles from "styles/GlobalStyles";
import Header from "./components/headers/light.js";
import Landing from "./clean/pages/home/HomePage.jsx";
import React from "react";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;
  //  "start": "react-scripts --openssl-legacy-provider start",

  return (
    <>
      <GlobalStyles />
      <Router>
        <section
          style={{
            paddingTop: "30px",
            paddingBottom: "30px",
            position: "fixed",
            top: 0,
            background: "white",
            width: "100%",
            zIndex: "99999",
            boxShadow: "0 20px 50px rgba(0,0,0, 0.075)",
          }}
        >
          <Header roundedHeaderButton />
        </section>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/unternehmen" element={<CompaniesPage />} />
          <Route path="/candidates" element={<CandidatesPage />} />
        </Routes>
      </Router>
    </>
  );
}
