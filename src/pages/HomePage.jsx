import React, { useState } from 'react';
import Header from '../components/Header';
import RegionSelector from '../components/RegionSelector';
import AppRecommendation from '../components/AppRecommendation';
import FareEstimator from '../components/FareEstimator';
import SafetyTips from '../components/SafetyTips';
import Features from '../components/Features';
import AdSlot from '../components/AdSlot';
import { taxiApps } from '../data/taxiApps';



export default function HomePage() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setSelectedCountry('');
  };

  const currentCountryData = selectedRegion && selectedCountry
    ? taxiApps[selectedRegion][selectedCountry]
    : null;

  return (
    <>
      <Header />
      <main className="container" style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', gridColumn: '1 / -1' }}>
          <div className="row-with-ad" style={{ alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <RegionSelector
                data={taxiApps}
                selectedRegion={selectedRegion}
                selectedCountry={selectedCountry}
                onRegionChange={handleRegionChange}
                onCountryChange={setSelectedCountry}
              />
            </div>
            <div className="ad-col">
              <AdSlot />
            </div>
          </div>





          {currentCountryData ? (
            <>
              <AppRecommendation countryData={currentCountryData} />
              <FareEstimator currency={currentCountryData.currency} />
            </>
          ) : (
            <div className="card" style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              color: 'var(--text-secondary)',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.06) 100%)',
              borderDashed: true,
              border: '2px dashed rgba(59, 130, 246, 0.2)',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🌍</div>
              <p style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                👈 Select a region and country
              </p>
              <p style={{ fontSize: '1.05rem', opacity: 0.7, maxWidth: '400px' }}>
                Discover the best ride-hailing apps available in your destination, get local insights, and calculate estimated fares.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Features Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.06) 100%)',
        padding: '4rem 3rem',
        margin: '4rem 0'
      }}>
        <Features />
      </section>

      {/* Safety and CTA Section */}
      <main className="container" style={{ marginBottom: '3rem' }}>
        <div>
          <SafetyTips />
          <div className="card" style={{
            marginTop: '1.5rem',
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            color: 'white',
            textAlign: 'center'
          }}>
            <h3 style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              fontSize: '1.6rem'
            }}>
              <span style={{ fontSize: '1.5em' }}>🚀</span>
              Join Our Mission
            </h3>
            <p style={{
              fontSize: '1.05rem',
              opacity: 0.9,
              marginTop: '1rem',
              marginBottom: '1.5rem',
              lineHeight: '1.8',
              maxWidth: '500px',
              margin: '1rem auto 1.5rem'
            }}>
              Help travelers worldwide discover the best ride-hailing options. Share your local knowledge and become part of our growing community.
            </p>
            <button style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              color: 'white',
              fontSize: '1.05rem',
              padding: '1rem 2.5rem',
              borderRadius: '12px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s',
              marginRight: '1rem'
            }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Learn More
            </button>
            <button style={{
              background: 'white',
              color: '#3b82f6',
              fontSize: '1.05rem',
              padding: '1rem 2.5rem',
              borderRadius: '12px',
              fontWeight: '800',
              cursor: 'pointer',
              border: 'none',
              transition: 'all 0.3s',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
            }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
              onClick={() => window.navigateTo('affiliate')}
            >
              Become a Partner
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
