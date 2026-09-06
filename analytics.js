// Vercel Web Analytics initialization
// This script loads after the page is ready
(function() {
  // Initialize Vercel Analytics queue
  window.va = window.va || function() {
    (window.vaq = window.vaq || []).push(arguments);
  };
  
  // Inject the analytics script
  // The script will be served by Vercel when deployed
  const script = document.createElement('script');
  script.src = '/_vercel/insights/script.js';
  script.defer = true;
  
  script.onerror = function() {
    console.log('[Vercel Web Analytics] Script will be available after deployment to Vercel.');
  };
  
  document.head.appendChild(script);
})();
