import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useDarkMode from './hooks/useDarkMode';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import PageContent from './components/common/PageContent';
// Import the newly created page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PlansPricingPage from './pages/PlansPricingPage';
import AerosVisionBusinessPage from './pages/AerosVisionBusinessPage';
import TeachOnAerosVisionPage from './pages/TeachOnAerosVisionPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AmazonWebServicesPage from './pages/cloud-service-providers/AmazonWebServicesPage';
import MicrosoftAzurePage from './pages/cloud-service-providers/MicrosoftAzurePage';
import GoogleCloudPlatformPage from './pages/cloud-service-providers/GoogleCloudPlatformPage';
import InstructorDashboard from './pages/InstructorDashboard';
import CloudEngineerPage from './pages/cloud-and-infrastructure-engineering/CloudEngineerPage';
import DevOpsEngineerPage from './pages/cloud-and-infrastructure-engineering/DevOpsEngineerPage';
import PlatformEngineerPage from './pages/cloud-and-infrastructure-engineering/PlatformEngineerPage';
import SiteReliabilityEngineerPage from './pages/cloud-and-infrastructure-engineering/SiteReliabilityEngineerPage';
import CloudInfrastructureMigrationPage from './pages/services/CloudInfrastructureMigrationPage';
import DevOpsSreSolutionsPage from './pages/services/DevOpsSreSolutionsPage';
import OutsourcedCloudTalentPage from './pages/services/OutsourcedCloudTalentPage';
import TrainingCareerGuidancePage from './pages/services/TrainingCareerGuidancePage';

const App = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 antialiased transition-colors duration-300">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cloud-service-providers/aws" element={<AmazonWebServicesPage />} />
            <Route path="/cloud-service-providers/azure" element={<MicrosoftAzurePage />} />
            <Route path="/cloud-service-providers/gcp" element={<GoogleCloudPlatformPage />} />
            <Route path="/cloud-and-infrastructure-engineering/cloud-engineer" element={<CloudEngineerPage />} />
            <Route path="/cloud-and-infrastructure-engineering/devops-engineer" element={<DevOpsEngineerPage />} />
            <Route path="/cloud-and-infrastructure-engineering/platform-engineer" element={<PlatformEngineerPage />} />
            <Route path="/cloud-and-infrastructure-engineering/site-reliability-engineer" element={<SiteReliabilityEngineerPage />} />
            <Route path="/services/cloud-infrastructure-migration" element={<CloudInfrastructureMigrationPage />} />
            <Route path="/services/devops-sre-solutions" element={<DevOpsSreSolutionsPage />} />
            <Route path="/services/outsource-cloud-talent" element={<OutsourcedCloudTalentPage />} />
            <Route path="/services/training-career-guidance" element={<TrainingCareerGuidancePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/plans" element={<PlansPricingPage />} />
            <Route path="/business" element={<AerosVisionBusinessPage />} />
            <Route path="/teach" element={<TeachOnAerosVisionPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
            {/*<Route path="*" element={<PageContent pageTitle="Page Not Found" description="The page you are looking for does not exist." />} />*/}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;