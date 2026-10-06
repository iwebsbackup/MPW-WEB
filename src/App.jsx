import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Investigations from "./pages/Investigations/Investigations";
import Networks from "./pages/Networks/Networks";
import Enforcement from "./pages/Enforcement/Enforcement";
import Numbers from "./pages/Numbers/Numbers";
import Method from "./pages/Method/Method";

// Mandatory Compliance Footer Pages
import ReplyPortal from "./pages/FooterPages/ReplyPortal";
import Grievance from "./pages/FooterPages/Grievance";
import Corrections from "./pages/FooterPages/Corrections";
import About from "./pages/FooterPages/About";
import Policies from "./pages/FooterPages/Policies";
import Contact from "./pages/FooterPages/Contact";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="investigations" element={<Investigations />} />
            <Route path="investigations/:slug" element={<Investigations />} />
            <Route path="networks" element={<Networks />} />
            <Route path="networks/:slug" element={<Networks />} />
            <Route path="enforcement" element={<Enforcement />} />
            <Route path="enforcement/:slug" element={<Enforcement />} />
            <Route path="numbers" element={<Numbers />} />
            <Route path="method" element={<Method />} />

            {/* Statutory Compliance Footer Routes */}
            <Route path="reply" element={<ReplyPortal />} />
            <Route path="grievance" element={<Grievance />} />
            <Route path="corrections" element={<Corrections />} />
            <Route path="about" element={<About />} />
            <Route path="policies" element={<Policies />} />
            <Route path="contact" element={<Contact />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;