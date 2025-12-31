import React from 'react';

export default function Features() {
    const features = [
        {
            icon: '🌍',
            title: 'Global Coverage',
            description: 'Access information about ride-hailing apps in 50+ countries across all continents.'
        },
        {
            icon: '💡',
            title: 'Local Insights',
            description: 'Get insider tips and real-world advice from travelers who have used these services.'
        },
        {
            icon: '💰',
            title: 'Fare Calculator',
            description: 'Estimate your ride costs based on local pricing rates for any destination.'
        },
        {
            icon: '🛡️',
            title: 'Safety First',
            description: 'Learn essential safety tips and best practices for using ride-hailing services.'
        },
        {
            icon: '📱',
            title: 'App Recommendations',
            description: 'Get personalized app suggestions based on your travel destination.'
        },
        {
            icon: '⭐',
            title: 'Verified Data',
            description: 'All information is regularly updated and verified by community contributors.'
        }
    ];

    return (
        <section style={{
            marginBottom: '4rem',
            marginTop: '3rem'
        }}>
            <h2 style={{
                textAlign: 'center',
                marginBottom: '3rem',
                fontSize: '3rem'
            }}>
                Why Choose Our Guide?
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem'
            }}>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        style={{
                            padding: '2.5rem 2rem',
                            background: 'rgba(255, 255, 255, 0.6)',
                            borderRadius: '16px',
                            border: '2px solid rgba(59, 130, 246, 0.1)',
                            textAlign: 'center',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#ffffff';
                            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                            e.currentTarget.style.boxShadow = '0 20px 50px rgba(59, 130, 246, 0.1)';
                            e.currentTarget.style.transform = 'translateY(-8px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.1)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <div style={{ fontSize: '3.5rem', marginBottom: '1.25rem' }}>
                            {feature.icon}
                        </div>
                        <h3 style={{
                            fontSize: '1.4rem',
                            marginBottom: '0.75rem',
                            color: 'var(--text-primary)'
                        }}>
                            {feature.title}
                        </h3>
                        <p style={{
                            fontSize: '1rem',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7'
                        }}>
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
