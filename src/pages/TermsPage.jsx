import React from 'react';
import Header from '../components/Header';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 3rem', marginBottom: '3rem' }}>
        <h1>Terms of Service</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using the Global Taxi Guide website and services, you accept and agree to be bound by and comply with these terms and conditions. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Global Taxi Guide's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul style={{ paddingLeft: '2rem' }}>
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose or for any public display</li>
            <li>Attempting to decompile or reverse engineer any software contained on Global Taxi Guide's website</li>
            <li>Removing any copyright or other proprietary notations from the materials</li>
            <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>3. Disclaimer</h2>
          <p>
            The materials on Global Taxi Guide's website are provided on an 'as is' basis. Global Taxi Guide makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>4. Limitations</h2>
          <p>
            In no event shall Global Taxi Guide or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Global Taxi Guide's website.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Global Taxi Guide's website could include technical, typographical, or photographic errors. Global Taxi Guide does not warrant that any of the materials on its website are accurate, complete, or current. Global Taxi Guide may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>6. Links</h2>
          <p>
            Global Taxi Guide has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Global Taxi Guide of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>7. Modifications</h2>
          <p>
            Global Taxi Guide may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where Global Taxi Guide is based, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>9. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <ul style={{ paddingLeft: '2rem' }}>
            <li>By email: legal@globaltaxiguide.com</li>
          </ul>
        </section>
      </div>
    </main>
    </>
  );
}
