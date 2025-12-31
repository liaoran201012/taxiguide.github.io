import React from 'react';

export default function Header() {
    return (
        <header style={{
            marginBottom: '2rem',
            padding: '1.5rem 3rem',
            background: 'linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.95) 100%)',
            borderBottom: '1px solid rgba(59, 130, 246, 0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {/* Logo */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer'
                }}
                onClick={() => window.navigateTo('home')}
                >
                    <div style={{ fontSize: '2rem' }}>🚕</div>
                    <div>
                        <h1 style={{
                            fontSize: '1.4rem',
                            fontWeight: '900',
                            color: 'var(--text-primary)',
                            margin: 0,
                            background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Taxi Guide
                        </h1>
                    </div>
                </div>

                {/* Navigation */}
                <nav style={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center'
                }}>
                    {[
                        { label: 'Home', page: 'home' },
                        { label: 'About', page: 'about' },
                        { label: 'Contact', page: 'contact' },
                        { label: 'Affiliate', page: 'affiliate' }
                    ].map((item) => (
                        <button
                            key={item.page}
                            onClick={() => window.navigateTo(item.page)}
                            style={{
                                background: 'transparent',
                                color: 'var(--text-secondary)',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '0.95rem',
                                fontWeight: '600',
                                transition: 'all 0.3s',
                                boxShadow: 'none'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                                e.target.style.color = 'var(--primary-color)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = 'var(--text-secondary)';
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
}
