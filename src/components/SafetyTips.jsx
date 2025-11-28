import React from 'react';

export default function SafetyTips() {
    const tips = [
        { icon: '📱', title: 'Share your ride', desc: 'Always use the "Share Status" feature in the app to let friends know your location.' },
        { icon: '🎫', title: 'Check the plate', desc: 'Verify the license plate and driver\'s photo match the app before getting in.' },
        { icon: '🗺️', title: 'Follow the map', desc: 'Keep your own maps app open to ensure the driver is taking a logical route.' },
        { icon: '✅', title: 'Avoid street hails', desc: 'In many countries, app-based rides are safer and have fixed pricing compared to street taxis.' }
    ];

    return (
        <div className="card" style={{
            borderLeft: '4px solid var(--accent-color)',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(251, 191, 36, 0.05) 100%)',
        }}>
            <h3 style={{
                color: 'var(--accent-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '1.8rem',
                marginBottom: '2rem',
                fontWeight: '800'
            }}>
                <span style={{ fontSize: '1.5em' }}>⚠️</span>
                Traveler Safety Tips
            </h3>
            <ul style={{
                listStyle: 'none',
                paddingLeft: 0,
                display: 'grid',
                gap: '1.5rem',
                marginTop: '1rem'
            }}>
                {tips.map((tip, index) => (
                    <li key={index} style={{
                        display: 'flex',
                        gap: '1.5rem',
                        padding: '1.75rem',
                        background: 'rgba(255, 255, 255, 0.6)',
                        borderRadius: '12px',
                        border: '1px solid rgba(245, 158, 11, 0.2)',
                        transition: 'all 0.3s ease',
                        cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(245, 158, 11, 0.1)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.transform = 'translateX(0)';
                    }}>
                        <div style={{ fontSize: '2.2rem', minWidth: '60px' }}>{tip.icon}</div>
                        <div>
                            <p style={{
                                fontWeight: '800',
                                color: 'var(--text-primary)',
                                marginBottom: '0.5rem',
                                fontSize: '1.15rem'
                            }}>
                                {tip.title}
                            </p>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1rem',
                                lineHeight: '1.7'
                            }}>
                                {tip.desc}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
