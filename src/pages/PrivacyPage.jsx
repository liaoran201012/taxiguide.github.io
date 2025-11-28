import React from 'react';

export default function PrivacyPage() {
  return (
    <main style={{ paddingTop: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 3rem', marginBottom: '3rem' }}>
        <h1>Privacy Policy</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Introduction</h2>
          <p>
            Global Taxi Guide ("we", "us", "our", or "Company") operates the Global Taxi Guide website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

          <h3>Types of Data Collected:</h3>
          <ul style={{ paddingLeft: '2rem' }}>
            <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you.</li>
            <li><strong>Usage Data:</strong> We may also collect information about how the Service is accessed and used ("Usage Data").</li>
            <li><strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to track activity on our Service and hold certain information.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Use of Data</h2>
          <p>Global Taxi Guide uses the collected data for various purposes:</p>
          <ul style={{ paddingLeft: '2rem' }}>
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Security of Data</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul style={{ paddingLeft: '2rem' }}>
            <li>By email: privacy@globaltaxiguide.com</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
