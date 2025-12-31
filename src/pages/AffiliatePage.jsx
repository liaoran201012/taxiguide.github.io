import React, { useState } from 'react';
import Header from '../components/Header';

export default function AffiliatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    monthlyVisitors: '',
    niche: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Affiliate application:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        website: '',
        monthlyVisitors: '',
        niche: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <>
      <Header />
      <main style={{ paddingTop: '2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 3rem' }}>
        {/* Header */}
        <section style={{
          marginBottom: '4rem',
          paddingTop: '3rem',
          paddingBottom: '3rem',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Become an Affiliate Partner</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Earn commissions by promoting Global Taxi Guide to your audience. Join hundreds of successful partners worldwide.
          </p>
        </section>

        {/* Benefits */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Why Become an Affiliate?</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: '💰',
                title: 'Competitive Commissions',
                desc: 'Earn up to 30% commission on every referral. No cap on earnings.'
              },
              {
                icon: '📊',
                title: 'Real-time Tracking',
                desc: 'Monitor your clicks, conversions, and earnings in real-time with our dashboard.'
              },
              {
                icon: '🎯',
                title: 'Marketing Support',
                desc: 'Get promotional materials, banners, and content ideas to help you succeed.'
              },
              {
                icon: '🤝',
                title: 'Dedicated Support',
                desc: 'Our affiliate team is here to help you with questions and optimization.'
              },
              {
                icon: '🚀',
                title: 'Growing Audience',
                desc: 'Benefit from our rapidly growing user base - 500K+ annual users.'
              },
              {
                icon: '⭐',
                title: 'Reliable Payouts',
                desc: 'Monthly payments via PayPal, bank transfer, or your preferred method.'
              }
            ].map((benefit, i) => (
              <div key={i} className="card">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.06) 100%)',
          padding: '3rem',
          borderRadius: '16px',
          marginBottom: '4rem'
        }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Requirements</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div>
              <h3>✅ Minimum Traffic</h3>
              <p>
                At least 1,000 monthly visitors to your website or 10,000 followers on social media.
              </p>
            </div>
            <div>
              <h3>✅ Original Content</h3>
              <p>
                Your content should be original, relevant, and add value to your audience.
              </p>
            </div>
            <div>
              <h3>✅ Professional Standard</h3>
              <p>
                Your website or platform should maintain professional standards and good reputation.
              </p>
            </div>
            <div>
              <h3>✅ Active Promotion</h3>
              <p>
                Commit to actively promoting Global Taxi Guide through various channels.
              </p>
            </div>
          </div>
        </section>

        {/* Commission Structure */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Commission Structure</h2>
          <div className="card" style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(34, 197, 94, 0.06) 100%)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse'
            }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--primary-color)' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Level</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Commission</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  <td style={{ padding: '1rem' }}>🥉 Bronze</td>
                  <td style={{ padding: '1rem', fontWeight: '700' }}>10%</td>
                  <td style={{ padding: '1rem' }}>New affiliates</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  <td style={{ padding: '1rem' }}>🥈 Silver</td>
                  <td style={{ padding: '1rem', fontWeight: '700' }}>15%</td>
                  <td style={{ padding: '1rem' }}>10+ conversions/month</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  <td style={{ padding: '1rem' }}>🥇 Gold</td>
                  <td style={{ padding: '1rem', fontWeight: '700' }}>20%</td>
                  <td style={{ padding: '1rem' }}>25+ conversions/month</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem' }}>💎 Platinum</td>
                  <td style={{ padding: '1rem', fontWeight: '700', color: '#f59e0b' }}>30%</td>
                  <td style={{ padding: '1rem' }}>50+ conversions/month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Application Form */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem' }}>Apply Now</h2>
          <div className="card" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {submitted ? (
              <div style={{
                padding: '3rem',
                background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid #6ee7b7'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <p style={{ fontSize: '1.3rem', color: '#047857', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Application Submitted!
                </p>
                <p style={{ color: '#06b6d4' }}>
                  We'll review your application and contact you within 24-48 hours with a decision.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    style={{ marginBottom: 0 }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    style={{ marginBottom: 0 }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Website / Platform URL
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    required
                    placeholder="https://yourwebsite.com"
                    style={{ marginBottom: 0 }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Monthly Visitors / Followers
                  </label>
                  <input
                    type="number"
                    name="monthlyVisitors"
                    value={formData.monthlyVisitors}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 5000"
                    style={{ marginBottom: 0 }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Your Niche
                  </label>
                  <select
                    name="niche"
                    value={formData.niche}
                    onChange={handleChange}
                    required
                    style={{ marginBottom: 0 }}
                  >
                    <option value="">Select your niche</option>
                    <option value="travel">Travel Blog</option>
                    <option value="vlog">YouTube/Video</option>
                    <option value="social">Social Media</option>
                    <option value="newsletter">Newsletter</option>
                    <option value="podcast">Podcast</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Why do you want to promote Global Taxi Guide?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your promotion strategy..."
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-family)',
                      marginBottom: 0
                    }}
                  />
                </div>

                <button type="submit" style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1.1rem',
                  fontWeight: '700'
                }}>
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              {
                q: 'How long does it take to get approved?',
                a: 'We typically review applications within 24-48 hours. You\'ll receive an email with your status and next steps.'
              },
              {
                q: 'When do I get paid?',
                a: 'Commissions are paid monthly via your preferred method. Minimum payout is $50.'
              },
              {
                q: 'What promotional materials do you provide?',
                a: 'We provide banners, text links, sample content, and custom landing pages for your promotions.'
              },
              {
                q: 'Can I promote on social media?',
                a: 'Yes! We encourage promotion on all platforms including social media, blogs, YouTube, podcasts, etc.'
              },
              {
                q: 'Is there a contract?',
                a: 'Yes, we have a simple affiliate agreement. No long-term commitment required.'
              }
            ].map((faq, i) => (
              <div key={i} className="card" style={{ marginBottom: '1rem' }}>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                  {faq.q}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
