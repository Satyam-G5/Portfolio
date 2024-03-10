import React, { useEffect } from 'react';

const CalendlyEmbed :React.FC= () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/satyamofficial4916/30min" style={{ width: '100%', height: '700px' }} />
  );
};

export default CalendlyEmbed;
