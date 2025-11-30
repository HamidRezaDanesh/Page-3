import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';
import './styles/modern-design.css'; 
import './styles/modern-vazir.css';

// import './styles/modern-design.css'; // ← اگر این فایل رو نداری، کامنتش کن

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
    </div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);