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
    script.src = 'https://tpwgt.com/content?currency=usd&trs=484712&shmarker=693317&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&plain=false&promo_id=7879&campaign_id=100'';
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
