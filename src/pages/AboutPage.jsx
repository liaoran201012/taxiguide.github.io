import React from 'react';
import Header from '../components/Header';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 3rem' }}>
        {/* Hero */}
        <section style={{
          marginBottom: '4rem',
          paddingTop: '3rem',
          paddingBottom: '3rem',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>About Global Taxi Guide</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Empowering travelers worldwide with accurate, local-sourced information about ride-hailing services in 50+ countries.
          </p>
        </section>

        {/* Story */}
        <section className="card" style={{ marginBottom: '2rem' }}>
          <h2>Our Story</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            Global Taxi Guide was created to solve a common problem that every international traveler faces: figuring out how to get around safely and affordably in a new city.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            When we started traveling extensively, we realized that finding reliable information about local ride-hailing apps was frustratingly difficult. Each city had different apps, different pricing, and different unwritten rules. We decided to create a comprehensive, community-driven guide to help others navigate this confusing landscape.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Today, Global Taxi Guide is trusted by hundreds of thousands of travelers annually to make informed decisions about getting around their destination safely and affordably.
          </p>
        </section>

        {/* Mission */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div className="card">
            <h3>🎯 Our Mission</h3>
            <p>To empower travelers with reliable, up-to-date information about ride-hailing services worldwide, ensuring safe and affordable transportation in every destination.</p>
          </div>
          <div className="card">
            <h3>💡 Our Vision</h3>
            <p>To become the go-to resource for travelers seeking comprehensive guidance on local transportation options in every corner of the world.</p>
          </div>
          <div className="card">
            <h3>🤝 Our Values</h3>
            <p>Transparency, accuracy, community-driven content, and putting traveler safety and satisfaction above all else.</p>
          </div>
        </section>

        {/* Stats */}
        <section className="card" style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.06) 100%)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>By The Numbers</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary-color)' }}>50+</div>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Countries Covered</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--success-color)' }}>100+</div>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Apps Indexed</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--accent-color)' }}>500K+</div>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Annual Users</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#06b6d4' }}>1000+</div>
              <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Contributors</div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Team</h2>
          <div className="card">
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Global Taxi Guide is built by a passionate team of travel enthusiasts, software engineers, and local guides from around the world. Our team is dedicated to maintaining the highest standards of accuracy and relevance. We work with community contributors in each region to ensure our information stays current and reliable.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
          color: 'white',
          padding: '3rem',
          borderRadius: '16px',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Get in Touch</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <button style={{
            background: 'white',
            color: '#3b82f6',
            padding: '1rem 2.5rem',
            fontSize: '1.05rem',
            fontWeight: '800',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
          onClick={() => window.navigateTo('contact')}
          >
            Contact Us
          </button>
        </section>
      </div>
    </main>
    </>
  );
}
