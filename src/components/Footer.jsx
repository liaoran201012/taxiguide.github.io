import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            marginTop: '5rem',
            paddingTop: '3rem',
            paddingBottom: '2rem',
            borderTop: '2px solid rgba(0, 0, 0, 0.08)',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(99, 102, 241, 0.02) 100%)'
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
                marginBottom: '2rem'
            }}>
                {/* Brand Section */}
                <div>
                    <h3 style={{
                        fontSize: '1.4rem',
                        marginBottom: '1rem',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        🚕 Global Taxi Guide
                    </h3>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1rem',
                        lineHeight: '1.7'
                    }}>
                        Your trusted companion for ride-hailing services worldwide.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{
                        fontSize: '1.2rem',
                        marginBottom: '1rem',
                        fontWeight: '700'
                    }}>
                        Quick Links
                    </h4>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0
                    }}>
                        <li style={{ marginBottom: '0.75rem' }}>
                            <a href="#about" onClick={(e) => {e.preventDefault(); window.navigateTo('about');}} style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '1rem',
                                transition: 'color 0.3s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                About Us
                            </a>
                        </li>
                        <li style={{ marginBottom: '0.75rem' }}>
                            <a href="#contact" onClick={(e) => {e.preventDefault(); window.navigateTo('contact');}} style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '1rem',
                                transition: 'color 0.3s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                Contact
                            </a>
                        </li>
                        <li style={{ marginBottom: '0.75rem' }}>
                            <a href="#privacy" onClick={(e) => {e.preventDefault(); window.navigateTo('privacy');}} style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '1rem',
                                transition: 'color 0.3s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#terms" onClick={(e) => {e.preventDefault(); window.navigateTo('terms');}} style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '1rem',
                                transition: 'color 0.3s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 style={{
                        fontSize: '1.2rem',
                        marginBottom: '1rem',
                        fontWeight: '700'
                    }}>
                        Support
                    </h4>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0
                    }}>
                        <li style={{ marginBottom: '0.75rem' }}>
                            <a href="#" style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '1rem',
                                transition: 'color 0.3s'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                Help Center
                            </a>
                        </li>
                        <li style={{ marginBottom: '0.75rem' }}>
                            <a href="#" style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '1rem',
                                transition: 'color 0.3s'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                FAQ
                            </a>
                        </li>
                        <li style={{ marginBottom: '0.75rem' }}>
                            <a href="#" style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '1rem',
                                transition: 'color 0.3s'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                Feedback
                            </a>
                        </li>
                        <li>
                            <a href="#affiliate" onClick={(e) => {e.preventDefault(); window.navigateTo('affiliate');}} style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '1rem',
                                transition: 'color 0.3s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                Affiliate Program
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h4 style={{
                        fontSize: '1.2rem',
                        marginBottom: '1rem',
                        fontWeight: '700'
                    }}>
                        Follow Us
                    </h4>
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        flexWrap: 'wrap'
                    }}>
                        <a href="#" style={{
                            width: '45px',
                            height: '45px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '10px',
                            fontSize: '1.25rem',
                            transition: 'all 0.3s',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--primary-color)';
                            e.currentTarget.style.borderColor = 'var(--primary-color)';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                            e.currentTarget.style.color = 'inherit';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                        >
                            👍
                        </a>
                        <a href="#" style={{
                            width: '45px',
                            height: '45px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '10px',
                            fontSize: '1.25rem',
                            transition: 'all 0.3s',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--primary-color)';
                            e.currentTarget.style.borderColor = 'var(--primary-color)';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                            e.currentTarget.style.color = 'inherit';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                        >
                            📧
                        </a>
                        <a href="#" style={{
                            width: '45px',
                            height: '45px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '10px',
                            fontSize: '1.25rem',
                            transition: 'all 0.3s',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--primary-color)';
                            e.currentTarget.style.borderColor = 'var(--primary-color)';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                            e.currentTarget.style.color = 'inherit';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                        >
                            💬
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
                paddingTop: '2rem',
                borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
            }}>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem'
                }}>
                    © {currentYear} Global Taxi Guide. All rights reserved.
                </p>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem'
                }}>
                    Made with ❤️ for travelers worldwide
                </p>
            </div>
        </footer>
    );
}
