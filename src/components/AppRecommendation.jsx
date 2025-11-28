import React from 'react';

export default function AppRecommendation({ countryData }) {
    if (!countryData) return null;

    return (
        <div className="card" style={{
            borderTop: '4px solid var(--primary-color)',
            animation: 'fadeInUp 0.5s ease-out'
        }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '2.2rem' }}>
                <span style={{ fontSize: '1.8em' }}>📱</span>
                Recommended Apps
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
                marginBottom: '2.5rem',
                marginTop: '1.75rem'
            }}>
                {countryData.apps.map(app => (
                    <div key={app} style={{
                        background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                        color: 'white',
                        padding: '1.25rem 1.5rem',
                        borderRadius: '12px',
                        fontSize: '1.05rem',
                        fontWeight: '700',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.25)',
                        transition: 'all 0.3s ease',
                        cursor: 'default',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '60px'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.25)';
                    }}>
                        {app}
                    </div>
                ))}
            </div>
            <div style={{
                background: 'linear-gradient(135deg, #eff6ff 0%, #fef3c7 100%)',
                padding: '1.5rem',
                borderRadius: '12px',
                borderLeft: '4px solid var(--accent-color)'
            }}>
                <p style={{
                    marginBottom: '0.75rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <span>💡</span>
                    Local Insight
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                    {countryData.notes}
                </p>
            </div>
            <p style={{
                marginTop: '1.5rem',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                textAlign: 'right',
                padding: '0.75rem 1rem',
                background: 'rgba(59, 130, 246, 0.05)',
                borderRadius: '8px',
                fontWeight: '500'
            }}>
                💱 Local Currency: <strong style={{ color: 'var(--primary-color)' }}>{countryData.currency}</strong>
            </p>
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}
