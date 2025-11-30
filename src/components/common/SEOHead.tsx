// src/components/common/SEOHead.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

export default function SEOHead({
  title,
  description,
  keywords,
  image = '/og-image.jpg',
  type = 'website'
}: SEOHeadProps) {
  const { i18n } = useTranslation(); // حذف t چون استفاده نمی‌شه
  const location = useLocation();

  const siteTitle = 'Hamidreza Daneshsarand - Mechanical Design Engineer';
  const defaultDescription = 'Experienced Mechanical Design Engineer specializing in SolidWorks, cost optimization, and sustainable manufacturing. Available for opportunities in Sweden.';
  const defaultKeywords = 'Mechanical Engineer, SolidWorks, CAD Design, Manufacturing, Sweden, Cost Optimization, Lean Manufacturing, Six Sigma';

  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const canonicalUrl = `https://hamidrezadaneshsarand.com${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta tags
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    updateMetaTag('author', 'Hamidreza Daneshsarand');
    updateMetaTag('language', i18n.language);

    // Open Graph
    updateMetaTag('og:title', fullTitle, 'property');
    updateMetaTag('og:description', finalDescription, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:locale', i18n.language === 'fa' ? 'fa_IR' : i18n.language === 'sv' ? 'sv_SE' : 'en_US', 'property');

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', image);

    // Update canonical link
    updateCanonicalLink(canonicalUrl);

    // Update language alternates
    updateAlternateLinks();
  }, [fullTitle, finalDescription, finalKeywords, canonicalUrl, i18n.language, image, type]);

  return null;
}

function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

function updateCanonicalLink(url: string) {
  let link = document.querySelector('link[rel="canonical"]');
  
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  
  link.setAttribute('href', url);
}

function updateAlternateLinks() {
  const languages = [
    { code: 'en', url: 'https://hamidrezadaneshsarand.com' },
    { code: 'sv', url: 'https://hamidrezadaneshsarand.com/sv' },
    { code: 'fa', url: 'https://hamidrezadaneshsarand.com/fa' }
  ];

  // Remove existing alternate links
  document.querySelectorAll('link[rel="alternate"]').forEach(link => link.remove());

  // Add new alternate links
  languages.forEach(({ code, url }) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', code);
    link.setAttribute('href', url);
    document.head.appendChild(link);
  });
}