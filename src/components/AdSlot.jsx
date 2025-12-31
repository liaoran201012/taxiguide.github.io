import React, { useEffect, useRef } from 'react';

export default function AdSlot({ minHeight = 280 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (el.dataset.adInjected) return;
    el.dataset.adInjected = '1';

    const script = document.createElement('script');
    script.async = true;
    script.charset = 'utf-8';
    script.src = 'https://tpscr.com/content?trs=477526&shmarker=687892&locale=en&show_header=true&powered_by=true&campaign_id=627&promo_id=8951';
    el.appendChild(script);

    return () => {
      while (el && el.firstChild) {
        el.removeChild(el.firstChild);
      }
      if (el) {
        delete el.dataset.adInjected;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ display: 'flex', justifyContent: 'center', minHeight }}
      aria-label="ad-slot"
    />
  );
}
