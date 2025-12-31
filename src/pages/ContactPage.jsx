import React, { useState } from 'react';
import Header from '../components/Header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    // In a real app, this would send to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
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
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Get in Touch</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Have a question, suggestion, or want to contribute? We'd love to hear from you!
          </p>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {/* Contact Info */}
          <div className="card">
            <h3>📧 Email</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
              <a href="mailto:hello@globaltaxiguide.com" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
                hello@globaltaxiguide.com
              </a>
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              For general inquiries and feedback
            </p>
          </div>

          <div className="card">
            <h3>🤝 Partnerships</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
              <a href="mailto:partners@globaltaxiguide.com" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
                partners@globaltaxiguide.com
              </a>
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              For affiliate and partnership opportunities
            </p>
          </div>

          <div className="card">
            <h3>🐛 Support</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
              <a href="mailto:support@globaltaxiguide.com" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
                support@globaltaxiguide.com
              </a>
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              For technical issues and bug reports
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
          <h2>Send us a Message</h2>
          {submitted ? (
            <div style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
              borderRadius: '12px',
              textAlign: 'center',
              border: '1px solid #6ee7b7'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅</div>
              <p style={{ fontSize: '1.2rem', color: '#047857', fontWeight: '700' }}>
                Thank you for your message!
              </p>
              <p style={{ color: '#06b6d4', marginTop: '0.5rem' }}>
                We'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Name
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
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                  style={{ marginBottom: 0 }}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more..."
                  rows="6"
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
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Social Links */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.06) 100%)',
          padding: '3rem',
          borderRadius: '16px',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{ marginBottom: '2rem' }}>Follow Us</h2>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {[
              { name: 'Twitter', emoji: '🐦', link: '#' },
              { name: 'Facebook', emoji: '👍', link: '#' },
              { name: 'Instagram', emoji: '📸', link: '#' },
              { name: 'LinkedIn', emoji: '💼', link: '#' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                style={{
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'white',
                  borderRadius: '12px',
                  fontSize: '1.8rem',
                  transition: 'all 0.3s',
                  border: '2px solid rgba(59, 130, 246, 0.2)',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary-color)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = 'inherit';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.emoji}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
