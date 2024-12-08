import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services/Services";
import ResumeWriting from "./Components/Services/Resume Writing/ResumeWriting";
import CoverLetterwriting from "./Components/Services/Cover Letter writing/CoverLetterwriting";
import LinkedInOptimization from "./Components/Services/LinkedIn Optimization/LinkedInOptimization";
import CareerAdvice from "./Components/CareerAdvice/CareerAdvice";
import BlogPostPage from "./Components/CareerAdvice/Components/CarrerBlogSection/BlogPostPage";
import About from "./Components/About/About";
import Writers from "./Components/Writers/Writers";
import ContactUs from "./Components/ContactUs/ContactUs";
import FAQ from "./Components/FAQ/FAQ";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import CookiePolicy from "./Components/CookiePolicy/CookiePolicy";
function App() {
  return (
    <div >
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicess" element={<Services />} />
          <Route path="/resumeWriting" element={<ResumeWriting />} />
          <Route path="/coverLetter" element={<CoverLetterwriting />} />
          <Route path="/linkedInOptimization" element={<LinkedInOptimization />} />
          <Route path="/careerAdvice" element={<CareerAdvice />} />
          <Route path="/blogPostPage" element={<BlogPostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/writers" element={<Writers />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/fAQ" element={<FAQ />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/cookiePolicy" element={<CookiePolicy />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
