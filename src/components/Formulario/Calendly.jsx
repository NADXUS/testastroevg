import React, { useEffect } from "react";

function Calendly() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    window.addEventListener('message', (event) => {
      if (event.data.event === 'calendly.event_scheduled') {
        fbq('track', 'SubmitApplication');
      }
    });

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', (event) => {
        if (event.data.event === 'calendly.event_scheduled') {
          fbq('track', 'SubmitApplication');
        }
      });
    };
  }, []);

  return (
    <div style={{ position: "relative", minWidth: "320px", height: "700px" }}>
      <iframe
        src="https://calendly.com/avoviteco/presentacion-agroinversiones-avovite?embed_domain=avovite.com&embed_type=Inline"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Select a Date &amp; Time - Calendly"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default Calendly;
