import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { usePageTracking } from './hooks/useAnalytics';
import ErrorBoundary from './components/common/ErrorBoundary';
import { PageLoader } from './components/common/LoadingSpinner';
import SEOHead from './components/common/SEOHead';
import Header from './components/layout/Header';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const ProtectedRoute = lazy(() => import('./components/auth/ProtectedRoute'));

// AppContent Component with Page Tracking
function AppContent() {
  usePageTracking(); // Track all route changes
  
  return (
    <>
      {/* Animated Gradient Mesh Background */}
      <div className="gradient-mesh-bg">
        <div className="gradient-mesh-orb1"></div>
        <div className="gradient-mesh-orb2"></div>
        <div className="gradient-mesh-orb3"></div>
      </div>

      {/* Main Content with z-index */}
      <div className="relative z-10">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Public Routes */}
            <Route
              path="/"
              element={
                <>
                  <SEOHead />
                  <div className="min-h-screen">
                    <Header />
                    <HomePage />
                  </div>
                </>
              }
            />

            <Route
              path="/about"
              element={
                <>
                  <SEOHead
                    title="About Me"
                    description="Learn more about Hamidreza Daneshsarand - Mechanical Design Engineer with 5+ years of experience"
                  />
                  <div className="min-h-screen">
                    <Header />
                    <AboutPage />
                  </div>
                </>
              }
            />

            <Route
              path="/experience"
              element={
                <>
                  <SEOHead
                    title="Work Experience"
                    description="Professional experience at ZF AG, SKF, and other leading companies"
                  />
                  <div className="min-h-screen">
                    <Header />
                    <ExperiencePage />
                  </div>
                </>
              }
            />

            <Route
              path="/skills"
              element={
                <>
                  <SEOHead
                    title="Skills & Certifications"
                    description="Technical skills in SolidWorks, CAD, manufacturing, and professional certifications"
                  />
                  <div className="min-h-screen">
                    <Header />
                    <SkillsPage />
                  </div>
                </>
              }
            />

            <Route
              path="/projects"
              element={
                <>
                  <SEOHead
                    title="Projects Portfolio"
                    description="Engineering projects and achievements in automotive and manufacturing"
                  />
                  <div className="min-h-screen">
                    <Header />
                    <ProjectsPage />
                  </div>
                </>
              }
            />

            <Route
              path="/contact"
              element={
                <>
                  <SEOHead
                    title="Contact Me"
                    description="Get in touch for opportunities in Sweden - Available for immediate relocation"
                  />
                  <div className="min-h-screen">
                    <Header />
                    <ContactPage />
                  </div>
                </>
              }
            />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<LoginPage />} />

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />

            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

// Main App Component
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <AppContent />
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}


export default App;