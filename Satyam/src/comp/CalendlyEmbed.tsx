import React, { useEffect } from 'react';

const CalendlyWidget: React.FC = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://assets.calendly.com/assets/external/widget.js';
    script1.async = true;
    document.body.appendChild(script1);

    return () => {
      document.body.removeChild(script1);
    };
  }, []);

  useEffect(() => {
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.onload = function() {
        Calendly.initBadgeWidget({
          url: 'https://calendly.com/satyamofficial4916/30min',
          text: 'Schedule time with me',
          color: '#0069ff',
          textColor: '#ffffff',
          branding: true
        });
      }
    `;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
};

export default CalendlyWidget;
